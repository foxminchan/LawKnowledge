/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ChatRequest, ChatSvc } from './chat.interface';
import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

export class ChatService implements OnModuleInit {
  private ChatSvcService: ChatSvc;

  constructor(@Inject('CHAT_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.ChatSvcService = this.client.getService<ChatSvc>('ChatService');
  }

  vectorize() {
    return this.ChatSvcService.vectorize().pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  chatRetrieval(data: ChatRequest) {
    return this.ChatSvcService.chatRetrieval(data).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
