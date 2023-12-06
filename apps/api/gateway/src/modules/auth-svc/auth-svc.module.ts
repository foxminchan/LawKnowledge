import { Module } from '@nestjs/common';
import { AuthService } from './auth-svc.service';
import { AuthController } from './auth-svc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.AUTH_SVC_HOST || 'localhost',
          port: parseInt(process.env.AUTH_SVC_PORT, 10) || 8081,
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthSvcModule {}
