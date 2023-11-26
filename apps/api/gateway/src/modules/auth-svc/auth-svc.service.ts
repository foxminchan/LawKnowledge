import { Inject } from '@nestjs/common';
import { catchError, map, of } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { LoginPayload, RegisterPayload } from '../../@types';

export class AuthSvcService {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authSvcService: ClientProxy
  ) {}

  getRoles() {
    return this.authSvcService
      .send({ cmd: 'getRoles' }, {})
      .pipe(map((data) => ({ data, isError: false })))
      .pipe(catchError((err) => of({ data: err, isError: true })));
  }

  login(payload: LoginPayload) {
    return this.authSvcService
      .send({ cmd: 'login' }, payload)
      .pipe(map((data) => ({ data, isError: false })))
      .pipe(catchError((err) => of({ data: err, isError: true })));
  }

  register(payload: RegisterPayload) {
    return this.authSvcService
      .send({ cmd: 'addUser' }, payload)
      .pipe(map((data) => ({ data, isError: false })))
      .pipe(catchError((err) => of({ data: err, isError: true })));
  }

  getUser(email: string) {
    return this.authSvcService
      .send({ cmd: 'getUser' }, { email })
      .pipe(map((data) => ({ data, isError: false })))
      .pipe(catchError((err) => of({ data: err, isError: true })));
  }
}
