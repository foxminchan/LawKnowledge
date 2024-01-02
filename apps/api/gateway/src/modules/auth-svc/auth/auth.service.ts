/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { AuthSvc, LoginRequest } from './auth.interface';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

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
}
