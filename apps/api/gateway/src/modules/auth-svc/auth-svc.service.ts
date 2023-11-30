import { Inject } from '@nestjs/common';
import { catchError, throwError } from 'rxjs';
import { LoginPayload, RegisterPayload } from '../../@types';
import { ClientProxy, RpcException } from '@nestjs/microservices';

export class AuthSvcService {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authSvcService: ClientProxy
  ) {}

  getRoles() {
    return this.authSvcService
      .send({ cmd: 'getRoles' }, {})
      .pipe(catchError((err) => throwError(() => new RpcException(err))));
  }

  login(payload: LoginPayload) {
    return this.authSvcService
      .send({ cmd: 'login' }, payload)
      .pipe(catchError((err) => throwError(() => new RpcException(err))));
  }

  register(payload: RegisterPayload) {
    return this.authSvcService
      .send({ cmd: 'addUser' }, payload)
      .pipe(catchError((err) => throwError(() => new RpcException(err))));
  }

  getUser(email: string) {
    return this.authSvcService
      .send({ cmd: 'getUser' }, { email })
      .pipe(catchError((err) => throwError(() => new RpcException(err))));
  }
}
