/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  TableFormSvc,
  TableFormCreateRequest,
  TableFormUpdateRequest,
} from './tableform.interface';
import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

export class TableFormService implements OnModuleInit {
  private tableFormSvcService: TableFormSvc;

  constructor(@Inject('LAW_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.tableFormSvcService =
      this.client.getService<TableFormSvc>('TableFormService');
  }

  getTableForm(id: string) {
    return this.tableFormSvcService.getTableForm(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getTableForms(criteria?: Criteria) {
    return this.tableFormSvcService.getTableForms(criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  createTableForm(payload: TableFormCreateRequest) {
    return this.tableFormSvcService.createTableForm(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  updateTableForm(payload: TableFormUpdateRequest) {
    return this.tableFormSvcService.updateTableForm(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  deleteTableForm(id: string) {
    return this.tableFormSvcService.deleteTableForm(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
