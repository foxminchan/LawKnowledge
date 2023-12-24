/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import * as eks from '@pulumi/eks';
import * as aws from '@pulumi/aws';
import * as awsx from '@pulumi/awsx';
import * as k8s from '@pulumi/kubernetes';

const vpc = new awsx.ec2.Vpc('hutechVpc', {
  cidrBlock: process.env.AWS_VPC_IP,
  enableDnsHostnames: true,
  numberOfAvailabilityZones: 2,
});

const cluster = new eks.Cluster('hutechCluster', {
  vpcId: vpc.vpcId,
  privateSubnetIds: vpc.privateSubnetIds,
  publicSubnetIds: vpc.publicSubnetIds,
  instanceType: 'hpc7g.16xlarge',
  maxSize: 3,
});

const eksRole = new aws.iam.Role('eksRole', {
  assumeRolePolicy: JSON.stringify({
    Version: '2012-10-17',
    Statement: [
      {
        Action: 'sts:AssumeRole',
        Effect: 'Allow',
        Principal: {
          Service: 'eks.amazonaws.com',
        },
      },
    ],
  }),
});

new aws.iam.RolePolicyAttachment('eks-AmazonEKSClusterPolicy', {
  role: eksRole,
  policyArn: 'arn:aws:iam::aws:policy/AmazonEKSClusterPolicy',
});

const logGroup = new aws.cloudwatch.LogGroup('eksLogGroup', {
  name: 'EKSLogGroup',
  retentionInDays: 7,
});

const services = [
  'website',
  'gateway',
  'auth-svc',
  'search-svc',
  'law-svc',
  'chat-svc',
];

services.forEach((service) => {
  const appLabels = { app: service };
  const deployment = new k8s.apps.v1.Deployment(
    `${service}-deployment`,
    {
      metadata: { labels: appLabels },
      spec: {
        replicas: 1,
        selector: { matchLabels: appLabels },
        template: {
          metadata: { labels: appLabels },
          spec: {
            containers: [
              {
                name: service,
                image: `ghcr.io/foxminchan/${service}`,
              },
            ],
          },
        },
      },
    },
    { provider: cluster.provider },
  );

  const k8sService = new k8s.core.v1.Service(
    `${service}-service`,
    {
      metadata: { labels: deployment.metadata.labels },
      spec: {
        type: 'LoadBalancer',
        ports: [{ port: 80 }],
        selector: appLabels,
      },
    },
    { provider: cluster.provider },
  );

  exports[service] = k8sService.status.loadBalancer.ingress[0].hostname;

  function createRoute53Record(serviceName: string, domain: string) {
    const zone = aws.route53.getZone({ name: domain }, { async: true });
    const record = new aws.route53.Record(`${serviceName}-record`, {
      name: serviceName,
      zoneId: zone.then((zone) => zone.zoneId),
      type: 'A',
      aliases: [
        {
          name: k8sService.status.loadBalancer.ingress[0].hostname,
          zoneId: process.env.AWS_ZONE_ID,
          evaluateTargetHealth: true,
        },
      ],
    });

    exports[`${serviceName}Record`] = record.fqdn;
  }

  if (service === 'website') {
    createRoute53Record(service, 'hutech.dev.com');
  }

  if (service === 'gateway') {
    createRoute53Record(service, 'api.hutech.dev.com');
  }
});

const kafka = new aws.msk.Cluster('hutechKafka', {
  clusterName: 'hutechKafka',
  kafkaVersion: '2.8.0',
  numberOfBrokerNodes: 3,
  brokerNodeGroupInfo: {
    instanceType: 'kafka.m5.24xlarge',
    clientSubnets: vpc.privateSubnetIds,
    securityGroups: [vpc.vpcId],
  },
  encryptionInfo: {
    encryptionAtRestKmsKeyArn: process.env.AWS_KMS_ARN,
    encryptionInTransit: {
      clientBroker: 'TLS',
      inCluster: true,
    },
  },
  loggingInfo: {
    brokerLogs: {
      cloudwatchLogs: {
        enabled: true,
        logGroup: 'hutech-kafka',
      },
    },
  },
});

const otelcollector = new k8s.helm.v3.Chart(
  'otelCollector',
  {
    chart: 'opentelemetry-collector',
    version: '0.27.0',
    fetchOpts: {
      repo: 'https://open-telemetry.github.io/opentelemetry-helm-charts',
    },
    namespace: 'default',
    values: {
      config: {
        receivers: {
          otlp: {
            protocols: {
              grpc: {},
            },
          },
        },
        exporters: {
          logging: {
            loglevel: 'debug',
          },
          otlp: {
            endpoint: 'otel-collector.default:4317',
          },
        },
        processors: {
          batch: {
            timeout: '1s',
            send_batch_size: 1024,
            send_batch_max_size_bytes: 102400,
          },
        },
        service: {
          pipelines: {
            traces: {
              receivers: ['otlp'],
              processors: ['batch'],
              exporters: ['logging', 'otlp'],
            },
          },
        },
      },
    },
  },
  { provider: cluster.provider },
);

const prometheus = new k8s.helm.v3.Chart(
  'prometheus',
  {
    chart: 'prometheus',
    version: '2.5.0',
    fetchOpts: {
      repo: 'https://prometheus-community.github.io/helm-charts',
    },
    namespace: 'default',
    values: {
      server: {
        global: {
          scrape_interval: '15s',
          scrape_timeout: '10s',
        },
        persistence: {
          enabled: true,
          storageClass: 'gp2',
          accessModes: ['ReadWriteOnce'],
          size: '8Gi',
        },
      },
      alertmanager: {
        persistence: {
          enabled: true,
          storageClass: 'gp2',
          accessModes: ['ReadWriteOnce'],
          size: '2Gi',
        },
      },
    },
  },
  { provider: cluster.provider },
);

const grafana = new k8s.helm.v3.Chart(
  'grafana',
  {
    chart: 'grafana',
    version: '7.0.19',
    fetchOpts: {
      repo: 'https://grafana.github.io/helm-charts',
    },
    namespace: 'default',
    values: {
      sidecar: {
        datasources: {
          enabled: true,
          label: 'grafana_datasource',
          datasources: {
            prometheus: {
              type: 'prometheus',
              access: 'proxy',
              url: 'http://prometheus-server.default.svc.cluster.local',
            },
          },
        },
        dashboards: {
          enabled: true,
          label: 'grafana_dashboard',
          searchNamespace: 'default',
          provider: {
            kubernetes: {
              enabled: true,
            },
          },
        },
      },
    },
  },
  { provider: cluster.provider },
);

const zipkin = new k8s.helm.v3.Chart(
  'zipkin',
  {
    chart: 'zipkin',
    version: '2.23.2',
    fetchOpts: {
      repo: 'https://artifacthub.io/packages/helm/carlosjgp/zipkin',
    },
    namespace: 'default',
    values: {
      service: {
        type: 'LoadBalancer',
      },
    },
  },
  { provider: cluster.provider },
);

const elasticsearch = new k8s.helm.v3.Chart(
  'elasticsearch',
  {
    chart: 'elasticsearch',
    version: '7.14.0',
    fetchOpts: {
      repo: 'https://helm.elastic.co',
    },
    namespace: 'default',
    values: {
      replicas: 1,
      minimumMasterNodes: 1,
      masterService: {
        type: 'LoadBalancer',
      },
      data: {
        persistence: {
          enabled: true,
          storageClass: 'gp2',
          accessModes: ['ReadWriteOnce'],
          size: '8Gi',
        },
      },
      ingest: {
        enabled: true,
      },
      client: {
        enabled: true,
      },
    },
  },
  { provider: cluster.provider },
);

const kibana = new k8s.helm.v3.Chart(
  'kibana',
  {
    chart: 'kibana',
    version: '7.14.0',
    fetchOpts: {
      repo: 'https://helm.elastic.co',
    },
    namespace: 'default',
    values: {
      service: {
        type: 'LoadBalancer',
      },
    },
  },
  { provider: cluster.provider },
);

const fluentd = new k8s.helm.v3.Chart(
  'fluentd',
  {
    chart: 'fluentd',
    version: '7.14.0',
    fetchOpts: {
      repo: 'https://helm.elastic.co',
    },
    namespace: 'default',
    values: {
      elasticsearch: {
        host: 'elasticsearch-master.default.svc.cluster.local',
        port: '9200',
        indexName: 'fluentd',
      },
      security: {
        enabled: false,
      },
    },
  },
  { provider: cluster.provider },
);

const webAcl = new aws.wafv2.WebAcl('hutechWaf', {
  defaultAction: {
    allow: {},
  },
  name: 'hutechWaf',
  description: 'WebACL for government application',
  rules: [
    {
      name: 'block-ip-rule',
      priority: 1,
      statement: {
        managedRuleGroupStatement: {
          name: 'AWSManagedRulesCommonRuleSet',
          vendorName: 'AWS',
        },
      },
      action: {
        block: {},
      },
      overrideAction: {
        none: {},
      },
      visibilityConfig: {
        cloudwatchMetricsEnabled: true,
        metricName: 'block-ip-rule',
        sampledRequestsEnabled: true,
      },
    },
  ],
  scope: 'REGIONAL',
  visibilityConfig: {
    cloudwatchMetricsEnabled: true,
    metricName: 'block-ip-rule',
    sampledRequestsEnabled: true,
  },
});

const alb = new aws.lb.LoadBalancer('hutechAlb', {
  loadBalancerType: 'application',
  subnets: vpc.publicSubnetIds,
  securityGroups: [process.env.AWS_SECURITY_GROUP],
});

const targetGroup = new aws.lb.TargetGroup('hutechTargetGroup', {
  port: 80,
  protocol: 'HTTP',
  targetType: 'ip',
  vpcId: vpc.vpcId,
});

const listener = new aws.lb.Listener('hutechListener', {
  loadBalancerArn: alb.arn,
  port: 80,
  protocol: 'HTTP',
  defaultActions: [
    {
      type: 'forward',
      targetGroupArn: targetGroup.arn,
    },
  ],
});

const exports = {
  kibana: kibana,
  zipkin: zipkin,
  grafana: grafana,
  fluentd: fluentd,
  prometheus: prometheus,
  elasticsearch: elasticsearch,
  otelcollector: otelcollector,
};

export const servicesStatus = Object.fromEntries(
  Object.entries(exports).map(([key, value]) => [
    key,
    value.getResource('v1/Service', `${key}-service`).status.loadBalancer,
  ]),
);

export const acl = webAcl.arn;
export const logGroupName = logGroup.name;
export const kubeconfig = cluster.kubeconfig;
export const kafkaSvc = kafka.bootstrapBrokers;
export const albListener = listener.arn;
export const kafkaBootstrapBrokers = kafka.bootstrapBrokers;
