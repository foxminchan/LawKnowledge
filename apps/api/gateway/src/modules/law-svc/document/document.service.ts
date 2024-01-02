/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  DocumentSvc,
  DocumentCreateRequest,
  DocumentUpdateRequest,
} from './document.interface';
import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

export class DocumentService implements OnModuleInit {
  private documentSvcService: DocumentSvc;

  constructor(@Inject('LAW_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.documentSvcService =
      this.client.getService<DocumentSvc>('DocumentService');
  }

  getDocument(id: string) {
    return this.documentSvcService.getDocument(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getDocuments(criteria?: Criteria) {
    return this.documentSvcService.getDocuments(criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  createDocument(payload: DocumentCreateRequest) {
    return this.documentSvcService.createDocument(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  updateDocument(payload: DocumentUpdateRequest) {
    return this.documentSvcService.updateDocument(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  deleteDocument(id: string) {
    return this.documentSvcService.deleteDocument(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  summarizeDocument(context: string) {
    return this.documentSvcService.summarizeDocument(context).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
