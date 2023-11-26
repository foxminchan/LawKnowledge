import { Module } from '@nestjs/common';
import { AuthSvcModule, HealthCheckModule } from './modules';

@Module({
  imports: [HealthCheckModule, AuthSvcModule],
  providers: [],
})
export class AppModule {}
