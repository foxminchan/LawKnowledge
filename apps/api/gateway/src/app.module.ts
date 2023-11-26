import { Module } from '@nestjs/common';
import { JwtStrategy } from '@law-knowledge/shared';
import { AuthSvcModule, HealthCheckModule } from './modules';

@Module({
  imports: [HealthCheckModule, AuthSvcModule],
  providers: [JwtStrategy],
})
export class AppModule {}
