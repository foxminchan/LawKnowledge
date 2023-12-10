import {
  HealthCheck,
  HealthCheckService,
  DiskHealthIndicator,
  HttpHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import {
  Key,
  ApiController,
  SwaggerResponse,
} from '@law-knowledge/building-block';
import { Get } from '@nestjs/common';

@ApiController('health')
export class HealthController {
  constructor(
    private http: HttpHealthIndicator,
    private disk: DiskHealthIndicator,
    private health: HealthCheckService,
    private memory: MemoryHealthIndicator,
  ) {}

  @Get()
  @SwaggerResponse({
    operation: 'Test health check',
  })
  healthCheck() {
    return 'API Gateway is up and running';
  }

  @Key()
  @Get('status')
  @HealthCheck()
  @SwaggerResponse({
    operation: 'Poolifier health check',
  })
  check() {
    return this.health.check([
      () =>
        this.http.pingCheck(
          'Auth service',
          `http://${process.env.AUTH_SVC_HOST}:${process.env.AUTH_SVC_PORT}`,
        ),
      () =>
        this.http.pingCheck(
          'Law service',
          `http://${process.env.LAW_SVC_HOST}:${process.env.LAW_SVC_HOST}`,
        ),
      () =>
        this.http.pingCheck(
          'Search service',
          `http://${process.env.SEARCH_SVC_HOST}:${process.env.SEARCH_SVC_PORT}`,
        ),
      () =>
        this.http.pingCheck(
          'Chat service',
          `http://${process.env.CHAT_SVC_HOST}:${process.env.CHAT_SVC_PORT}`,
        ),
      async () => this.memory.checkHeap('memory_heap', 200 * 1024 * 1024),
      async () => this.memory.checkRSS('memory_rss', 3000 * 1024 * 1024),
      () =>
        this.disk.checkStorage('disk health', {
          thresholdPercent: 0.5,
          path: 'C:\\',
        }),
      () =>
        this.disk.checkStorage('disk health', {
          threshold: 250 * 1024 * 1024 * 1024,
          path: 'C:\\',
        }),
    ]);
  }
}
