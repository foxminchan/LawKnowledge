import { PinoLogger } from 'nestjs-pino';
import { Get, OnModuleInit } from '@nestjs/common';
import { AuthSvcOptions } from './auth-svc.option';
import { AuthSvcService } from './auth-svc.interface';
import { ApiController } from '@law-knowledge/shared';
import { Client, ClientGrpc } from '@nestjs/microservices';

@ApiController('auth')
export class AuthSvcController implements OnModuleInit {
  constructor(private readonly logger: PinoLogger) {
    logger.setContext(AuthSvcController.name);
  }

  @Client(AuthSvcOptions)
  private readonly client: ClientGrpc;

  private authSvcService: AuthSvcService;

  onModuleInit() {
    this.authSvcService =
      this.client.getService<AuthSvcService>('AuthSvcService');
  }

  @Get('roles')
  async getRoles() {
    this.logger.info('Get roles');
    return this.authSvcService.getRoles();
  }
}
