import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { AuthSvc, LoginRequest, RegisterRequest } from './auth-svc.interface';

export class AuthService implements OnModuleInit {
  private authSvcService: AuthSvc;

  constructor(@Inject('AUTH_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.authSvcService = this.client.getService<AuthSvc>('AuthService');
  }

  login(payload: LoginRequest) {
    return this.authSvcService.login(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  register(payload: RegisterRequest) {
    return this.authSvcService.register(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getUser(email: string) {
    return this.authSvcService.findOne(email).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
