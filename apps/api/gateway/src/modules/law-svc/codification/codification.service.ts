/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CodificationSvc,
  CodificationCreateRequest,
  CodificationUpdateRequest,
} from './codification.interface';
import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

export class CodificationService implements OnModuleInit {
  private codificationSvcService: CodificationSvc;

  constructor(@Inject('LAW_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.codificationSvcService = this.client.getService<CodificationSvc>(
      'CodificationService',
    );
  }

  getCodification(id: string) {
    return this.codificationSvcService.getCodification(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getCodifications(criteria?: Criteria) {
    return this.codificationSvcService.getCodifications(criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  createCodification(payload: CodificationCreateRequest) {
    return this.codificationSvcService.createCodification(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  updateCodification(payload: CodificationUpdateRequest) {
    return this.codificationSvcService.updateCodification(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  deleteCodification(id: string) {
    return this.codificationSvcService.deleteCodification(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
