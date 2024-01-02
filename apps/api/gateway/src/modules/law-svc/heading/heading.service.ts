/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
	HeadingSvc,
  HeadingCreateRequest,
  HeadingUpdateRequest,
} from './heading.interface';
import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

export class HeadingService implements OnModuleInit {
  private headingSvcService: HeadingSvc;

  constructor(@Inject('LAW_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.headingSvcService =
      this.client.getService<HeadingSvc>('HeadingService');
  }

  getHeading(id: string) {
    return this.headingSvcService.getHeading(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getHeadings(criteria?: Criteria) {
    return this.headingSvcService.getHeadings(criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  createHeading(payload: HeadingCreateRequest) {
    return this.headingSvcService.createHeading(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  updateHeading(payload: HeadingUpdateRequest) {
    return this.headingSvcService.updateHeading(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  deleteHeading(id: string) {
    return this.headingSvcService.deleteHeading(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
