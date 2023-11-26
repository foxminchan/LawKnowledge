import { Module } from '@nestjs/common';
import { AuthSvcService } from './auth-svc.service';
import { AuthSvcController } from './auth-svc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 8081,
        },
      },
    ]),
  ],
  controllers: [AuthSvcController],
  providers: [AuthSvcService],
})
export class AuthSvcModule {}
