/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
	UserSvc,
  UserCreateRequest,
  UserUpdateRequest,
} from './user.interface';
import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

export class UserService implements OnModuleInit {
  private userSvcService: UserSvc;

  constructor(@Inject('AUTH_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userSvcService = this.client.getService<UserSvc>('UserService');
  }

  getUsers(criteria?: Criteria) {
    return this.userSvcService.getUsers(criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getUser(id: string) {
    return this.userSvcService.getUser(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  createUser(data: UserCreateRequest) {
    return this.userSvcService.createUser(data).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  updateUser(data: UserUpdateRequest) {
    return this.userSvcService.updateUser(data).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  deleteUser(id: string) {
    return this.userSvcService.deleteUser(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
