import { Module } from '@nestjs/common';
import { HealthCheckModule } from './modules';

@Module({
  imports: [HealthCheckModule],
  providers: [],
})
export class AppModule {}
