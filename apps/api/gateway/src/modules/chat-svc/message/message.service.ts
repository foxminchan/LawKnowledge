/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { ChatHistorySvc, GetChatHistoryRequest } from './message.interface';

export class ChatHistoryService implements OnModuleInit {
  private chatHistorySvcService: ChatHistorySvc;

  constructor(@Inject('CHAT_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.chatHistorySvcService =
      this.client.getService<ChatHistorySvc>('ChatHistoryService');
  }

  getChatHistory(request: GetChatHistoryRequest) {
    return this.chatHistorySvcService.getChatHistory(request).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  deleteChatHistory(id: string) {
    return this.chatHistorySvcService.deleteChatHistory(id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
