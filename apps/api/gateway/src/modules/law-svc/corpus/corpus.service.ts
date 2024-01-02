/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CorpusSvc,
  CorpusCreateRequest,
  CorpusUpdateRequest,
} from './corpus.interface';
import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

export class CorpusService implements OnModuleInit {
  private corpusSvcService: CorpusSvc;

  constructor(@Inject('LAW_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.corpusSvcService = this.client.getService<CorpusSvc>('CorpusService');
  }

  getCorpus(id: string) {
    return this.corpusSvcService.getCorpus(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getCorpuses(criteria?: Criteria) {
    return this.corpusSvcService.getCorpuses(criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  createCorpus(payload: CorpusCreateRequest) {
    return this.corpusSvcService.createCorpus(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  updateCorpus(payload: CorpusUpdateRequest) {
    return this.corpusSvcService.updateCorpus(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  deleteCorpus(id: string) {
    return this.corpusSvcService.deleteCorpus(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
