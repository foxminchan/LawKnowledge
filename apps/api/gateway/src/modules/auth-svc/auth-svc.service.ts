import { Inject } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { LoginPayload, RegisterPayload } from './auth-svc.payload';
import { ClientProxy, RpcException } from '@nestjs/microservices';

export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authSvcService: ClientProxy
  ) {}

  getRoles() {
    return this.authSvcService.send({ cmd: 'getRoles' }, {}).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err)))
    );
  }

  login(payload: LoginPayload) {
    return this.authSvcService.send({ cmd: 'login' }, payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err)))
    );
  }

  register(payload: RegisterPayload) {
    return this.authSvcService.send({ cmd: 'addUser' }, payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err)))
    );
  }

  getUser(email: string) {
    return this.authSvcService.send({ cmd: 'getUser' }, { email }).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err)))
    );
  }
}
