import { Module } from '@nestjs/common';
import { OpenTelemetryModule } from 'nestjs-otel';
import { OpenTelemetryTracer } from './otel.tracer';

@Module({
  imports: [
    OpenTelemetryModule.forRoot({
      metrics: {
        hostMetrics: true,
        apiMetrics: {
          enable: true,
        },
      },
    }),
  ],
  providers: [OpenTelemetryTracer],
})
export class OtelModule {}
