/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  TopicSvc,
  TopicCreateRequest,
  TopicUpdateRequest,
} from './topic.interface';
import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

export class TopicService implements OnModuleInit {
  private topicSvcService: TopicSvc;

  constructor(@Inject('LAW_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.topicSvcService = this.client.getService<TopicSvc>('TopicService');
  }

  getTopic(id: string) {
    return this.topicSvcService.getTopic(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getTopics(criteria?: Criteria) {
    return this.topicSvcService.getTopics(criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  createTopic(payload: TopicCreateRequest) {
    return this.topicSvcService.createTopic(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  updateTopic(payload: TopicUpdateRequest) {
    return this.topicSvcService.updateTopic(payload).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  deleteTopic(id: string) {
    return this.topicSvcService.deleteTopic(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
