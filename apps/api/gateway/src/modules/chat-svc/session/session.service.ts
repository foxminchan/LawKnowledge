/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  ChatSessionSvc,
  GetChatSessionsRequest,
  UpdateChatSessionRequest,
  CreateChatSessionRequest,
} from './session.interface';
import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { ClientGrpc, RpcException } from '@nestjs/microservices';

export class ChatSessionService implements OnModuleInit {
  private chatSessionSvcService: ChatSessionSvc;

  constructor(@Inject('CHAT_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.chatSessionSvcService =
      this.client.getService<ChatSessionSvc>('ChatSessionService');
  }

  getChatSessions(request: GetChatSessionsRequest) {
    return this.chatSessionSvcService.getChatSessions(request).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getChatSession(id: string) {
    return this.chatSessionSvcService.getChatSession(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  createChatSession(request: CreateChatSessionRequest) {
    return this.chatSessionSvcService.createChatSession(request).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  updateChatSession(request: UpdateChatSessionRequest) {
    return this.chatSessionSvcService.updateChatSession(request).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  deleteChatSession(id: string) {
    return this.chatSessionSvcService.deleteChatSession(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
