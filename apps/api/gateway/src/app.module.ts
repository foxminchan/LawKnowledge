import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AuthSvcModule, HealthCheckModule } from './modules';

@Module({
  imports: [HealthCheckModule, LoggerModule, AuthSvcModule],
  providers: [],
})
export class AppModule {}
