/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
	RoleSvc,
  RoleCreateRequest,
  RoleUpdateRequest,
} from './role.interface';
import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

export class RoleService implements OnModuleInit {
  private roleSvcService: RoleSvc;

  constructor(@Inject('AUTH_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.roleSvcService = this.client.getService<RoleSvc>('RoleService');
  }

  getRoles(criteria?: Criteria) {
    return this.roleSvcService.getRoles(criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getRole(id: string) {
    return this.roleSvcService.getRole(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  createRole(data: RoleCreateRequest) {
    return this.roleSvcService.createRole(data).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  updateRole(data: RoleUpdateRequest) {
    return this.roleSvcService.updateRole(data).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  deleteRole(id: string) {
    return this.roleSvcService.deleteRole(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
