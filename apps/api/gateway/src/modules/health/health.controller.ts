import {
  HealthCheck,
  HealthCheckService,
  DiskHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { Get } from '@nestjs/common';
import { ApiController, SwaggerResponse } from '@law-knowledge/shared';

@ApiController('health')
export class HealthController {
  constructor(
    private disk: DiskHealthIndicator,
    private health: HealthCheckService,
    private memory: MemoryHealthIndicator
  ) {}

  @Get()
  @SwaggerResponse({
    operation: 'Test health check',
  })
  healthCheck() {
    return 'Http working fine';
  }

  @Get('status')
  @HealthCheck()
  @SwaggerResponse({
    operation: 'Poolifier health check',
  })
  check() {
    return this.health.check([
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
