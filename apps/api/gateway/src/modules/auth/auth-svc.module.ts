import { Module } from '@nestjs/common';
import { AuthSvcController } from './auth-svc.controller';

@Module({
  controllers: [AuthSvcController],
})
export class AuthSvcModule {}
