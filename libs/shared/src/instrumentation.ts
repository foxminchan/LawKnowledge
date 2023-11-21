import {
  CompositePropagator,
  W3CBaggagePropagator,
  W3CTraceContextPropagator,
} from '@opentelemetry/core';
import * as process from 'process';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { B3InjectEncoding, B3Propagator } from '@opentelemetry/propagator-b3';
import { AsyncLocalStorageContextManager } from '@opentelemetry/context-async-hooks';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

const otelSDK = new NodeSDK({
  metricReader: new PrometheusExporter({
    port: 8081,
  }),
  spanProcessor: new BatchSpanProcessor(
    new OTLPTraceExporter({
      url: 'http://otel-collector:4318/v1/traces',
    })
  ),
  contextManager: new AsyncLocalStorageContextManager(),
  instrumentations: [getNodeAutoInstrumentations()],
  textMapPropagator: new CompositePropagator({
    propagators: [
      new W3CTraceContextPropagator(),
      new W3CBaggagePropagator(),
      new B3Propagator(),
      new B3Propagator({
        injectEncoding: B3InjectEncoding.MULTI_HEADER,
      }),
    ],
  }),
});

export default otelSDK;

process.on('SIGTERM', () => {
  otelSDK
    .shutdown()
    .then(
      () => console.log('SDK shut down successfully'),
      (err) => console.log('Error shutting down SDK', err)
    )
    .finally(() => process.exit(0));
});
