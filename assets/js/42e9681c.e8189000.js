"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90],{8608:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(9980),o=r(5937);const i={title:"Oberservability",description:"A collection of resources on observability",sidebar_position:2,last_update:{author:"Nguyen Xuan Nhan"}},t="Observability",a={id:"ref/observability",title:"Oberservability",description:"A collection of resources on observability",source:"@site/docs/ref/observability.mdx",sourceDirName:"ref",slug:"/ref/observability",permalink:"/LawKnowledge/docs/ref/observability",draft:!1,unlisted:!1,editUrl:"https://github.com/foxminchan/LawKnowledge/tree/main/apps/docs/docs/ref/observability.mdx",tags:[],version:"current",lastUpdatedBy:"Nguyen Xuan Nhan",lastUpdatedAt:1701423481,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:2,frontMatter:{title:"Oberservability",description:"A collection of resources on observability",sidebar_position:2,last_update:{author:"Nguyen Xuan Nhan"}},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/LawKnowledge/docs/ref/rest"},next:{title:"Telemetry",permalink:"/LawKnowledge/docs/ref/telemetry"}},l={},c=[{value:"Overview of Tools",id:"overview-of-tools",level:2},{value:"Installation and Configuration",id:"installation-and-configuration",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Logging",id:"logging",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Contributing",id:"contributing",level:2},{value:"References",id:"references",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"observability",children:"Observability"}),"\n",(0,n.jsx)(s.h2,{id:"overview-of-tools",children:"Overview of Tools"}),"\n",(0,n.jsx)("p",{align:"justify",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://prometheus.io/",children:"Prometheus"}),": In our project, Prometheus serves as a pull-based monitoring system that periodically scrapes and stores metrics from our services in its time-series database. It features PromQL, a query language for accessing these metrics, and a built-in alerting system for creating alerts based on metric conditions."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://grafana.com/",children:"Grafana"}),": Grafana is a visualization tool that allows us to create dashboards and graphs for our metrics. It supports a variety of data sources, including Prometheus, and allows us to create alerts based on metric conditions."]}),"\n"]})}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/LawKnowledge/img/o11y/prometheus-grafana.png",alt:"Prometheus and Grafana",width:"100%"}),"\n",(0,n.jsx)("p",{align:"justify",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://grafana.com/oss/loki/",children:"Loki"}),": Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus. It is designed to be very cost effective and easy to operate. It does not index the contents of the logs, but rather a set of labels for each log stream."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://grafana.com/oss/tempo/",children:"Tempo"}),": Tempo is a high volume, distributed tracing backend. Tempo is designed to be horizontally scalable and cost-efficient. Tempo depends on ",(0,n.jsx)(s.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"})," for its core functionality."]}),"\n"]})}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/LawKnowledge/img/o11y/automatic-logging.png",alt:"Automatic Monitoring",width:"100%"}),"\n",(0,n.jsx)(s.h2,{id:"installation-and-configuration",children:"Installation and Configuration"}),"\n",(0,n.jsxs)("p",{align:"justify",children:[(0,n.jsxs)(s.p,{children:["We have setup all the tools above in the ",(0,n.jsx)(s.code,{children:"docker-compose.o11y.yml"})," file. To start the monitoring system, navigate to the ",(0,n.jsx)(s.code,{children:"deploys/docker"})," directory and run the following command:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"docker-compose -f docker-compose.o11y.yml up -d\n"})})]}),"\n",(0,n.jsx)(s.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsx)(s.h3,{id:"logging",children:"Logging"}),"\n",(0,n.jsx)("p",{align:"justify",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Log Levels"}),": We should use the following log levels to indicate the severity of the log message:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"DEBUG"}),": Detailed information, typically of interest only when diagnosing problems."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"INFO"}),": Confirmation that things are working as expected."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"WARN"}),": An indication that something unexpected happened, or indicative of some problem in the near future (e.g. ",(0,n.jsx)(s.code,{children:"disk space low"}),"). The software is still working as expected."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ERROR"}),": Due to a more serious problem, the software has not been able to perform some function."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"FATAL"}),": A serious error, indicating that the program itself may be unable to continue running."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Log Format"}),": We should use a structured log format, such as JSON, to make it easier to parse and analyze logs. We can use a logging library to automatically format logs in a structured format."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Log Correlation"}),": We should use a correlation ID to correlate logs across services. The correlation ID should be passed along to downstream services."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Log Sampling"}),": We should sample logs to reduce the amount of logs that we need to store and analyze. We can use a sampling rate of 1% to 10% depending on the volume of logs."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Log Retention"}),": We should set a retention period for our logs. We can use a retention period of 30 days to 90 days depending on the volume of logs."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Log Rotation"}),": We should rotate our logs to prevent them from growing too large. We can use a log rotation period of 1 day to 7 days depending on the volume of logs."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Log Storage"}),": We should store our logs in a centralized location. We can use a log storage solution such as ",(0,n.jsx)(s.a,{href:"https://grafana.com/oss/loki/",children:"Loki"})," or ",(0,n.jsx)(s.a,{href:"https://www.elastic.co/what-is/elk-stack",children:"ELK"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Log Analysis"}),": We should analyze our logs to identify errors and performance issues. We can use a log analysis solution such as ",(0,n.jsx)(s.a,{href:"https://grafana.com/oss/grafana/",children:"Grafana"})," or ",(0,n.jsx)(s.a,{href:"https://www.elastic.co/kibana",children:"Kibana"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(s.h3,{id:"metrics",children:"Metrics"}),"\n",(0,n.jsx)("p",{align:"justify",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Metric Types"}),": We should use the following metric types to measure the performance of our services:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Counter"}),": A counter is a cumulative metric that represents a single numerical value that only ever goes up. A counter is typically used to count requests served, tasks completed, errors occurred, etc. Counters should not be used to expose current counts of items whose number can also go down, e.g. the number of currently running goroutines. Use gauges for this use case."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Gauge"}),": A gauge is a metric that represents a single numerical value that can arbitrarily go up and down."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Histogram"}),": A histogram samples observations (usually things like request durations or response sizes) and counts them in configurable buckets. It also provides a sum of all observed values."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Summary"}),": Similar to a histogram, a summary samples observations (usually things like request durations and response sizes). While it also provides a total count of observations and a sum of all observed values, it calculates configurable quantiles over a sliding time window."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Metric Names"}),": We should use the following naming conventions for our metrics:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"snake_case"}),": Use snake case for metric names."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"service_name"}),": Use the name of the service as the prefix for metric names."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"metric_name"}),": Use the name of the metric as the suffix for metric names."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"metric_type"}),": Use the metric type as the suffix for metric names."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Metric Labels"}),": We should use the following labels for our metrics:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"service_name"}),": Use the name of the service as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"metric_name"}),": Use the name of the metric as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"metric_type"}),": Use the metric type as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"status_code"}),": Use the status code as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_type"}),": Use the error type as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_code"}),": Use the error code as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_message"}),": Use the error message as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_stacktrace"}),": Use the error stacktrace as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_source"}),": Use the error source as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_target"}),": Use the error target as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_details"}),": Use the error details as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_cause"}),": Use the error cause as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_reason"}),": Use the error reason as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_action"}),": Use the error action as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_solution"}),": Use the error solution as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_recommendation"}),": Use the error recommendation as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_message"}),": Use the error message as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_stacktrace"}),": Use the error stacktrace as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_source"}),": Use the error source as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_target"}),": Use the error target as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_details"}),": Use the error details as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_cause"}),": Use the error cause as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_reason"}),": Use the error reason as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_action"}),": Use the error action as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_solution"}),": Use the error solution as a label for metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error_recommendation"}),": Use the error recommendation as a label for metrics."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Metric Sampling"}),": We should sample metrics to reduce the amount of metrics that we need to store and analyze. We can use a sampling rate of 1% to 10% depending on the volume of metrics."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Metric Retention"}),": We should set a retention period for our metrics. We can use a retention period of 30 days to 90 days depending on the volume of metrics."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Metric Storage"}),": We should store our metrics in a centralized location. We can use a metric storage solution such as ",(0,n.jsx)(s.a,{href:"https://prometheus.io/",children:"Prometheus"})," or ",(0,n.jsx)(s.a,{href:"https://graphiteapp.org/",children:"Graphite"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Metric Analysis"}),": We should analyze our metrics to identify errors and performance issues. We can use a metric analysis solution such as ",(0,n.jsx)(s.a,{href:"https://grafana.com/oss/grafana/",children:"Grafana"})," or ",(0,n.jsx)(s.a,{href:"https://graphiteapp.org/",children:"Graphite"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(s.h3,{id:"tracing",children:"Tracing"}),"\n",(0,n.jsx)("p",{align:"justify",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Trace IDs"}),": We should use a trace ID to correlate traces across services. The trace ID should be passed along to downstream services."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Trace Sampling"}),": We should sample traces to reduce the amount of traces that we need to store and analyze. We can use a sampling rate of 1% to 10% depending on the volume of traces."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Trace Retention"}),": We should set a retention period for our traces. We can use a retention period of 30 days to 90 days depending on the volume of traces."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Trace Storage"}),": We should store our traces in a centralized location. We can use a trace storage solution such as ",(0,n.jsx)(s.a,{href:"https://grafana.com/oss/tempo/",children:"Tempo"})," or ",(0,n.jsx)(s.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Trace Analysis"}),": We should analyze our traces to identify errors and performance issues. We can use a trace analysis solution such as ",(0,n.jsx)(s.a,{href:"https://grafana.com/oss/grafana/",children:"Grafana"})," or ",(0,n.jsx)(s.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(s.h2,{id:"contributing",children:"Contributing"}),"\n",(0,n.jsxs)("p",{align:"justify",children:[(0,n.jsxs)(s.p,{children:["Contributions are welcome! For bug reports or requests please ",(0,n.jsx)(s.a,{href:"https://github.com/foxminchan/LawKnowledge/issues",children:"submit an issue"})," or ",(0,n.jsx)(s.a,{href:"https://github.com/foxminchan/LawKnowledge/pulls",children:"pull request"})," on GitHub."]}),(0,n.jsxs)(s.p,{children:["We follow the ",(0,n.jsx)(s.a,{href:"https://www.contributor-covenant.org/version/2/0/code_of_conduct/",children:"Contributor Covenant"})," Code of Conduct."]})]}),"\n",(0,n.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.oreilly.com/library/view/practical-opentelemetry-adopting/9781484290750/",children:"Observability"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://grafana.com/docs/",children:"Grafana documentation"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://prometheus.io/docs/",children:"Prometheus documentation"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5937:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>t});var n=r(2363);const o={},i=n.createContext(o);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);