/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
	KeywordSvc,
  KeywordCreateRequest,
  KeywordUpdateRequest,
} from './keyword.interface';
import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

export class KeywordService implements OnModuleInit {
  private keywordSvcService: KeywordSvc;

  constructor(@Inject('LAW_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.keywordSvcService =
      this.client.getService<KeywordSvc>('KeywordService');
  }

  getKeyword(id: string) {
    return this.keywordSvcService.getKeyword(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getKeywords(criteria?: Criteria) {
    return this.keywordSvcService.getKeywords(criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  createKeyword(payload: KeywordCreateRequest) {
    return this.keywordSvcService.createKeyword(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  updateKeyword(payload: KeywordUpdateRequest) {
    return this.keywordSvcService.updateKeyword(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  deleteKeyword(id: string) {
    return this.keywordSvcService.deleteKeyword(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
