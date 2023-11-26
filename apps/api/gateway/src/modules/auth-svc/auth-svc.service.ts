import { Inject } from '@nestjs/common';
import { catchError, map, of } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { LoginPayload } from '../../@types/login.payload';

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
}
