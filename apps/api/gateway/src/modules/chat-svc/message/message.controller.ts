/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  Criteria,
  ApiController,
  SwaggerResponse,
  PagingSwaggerResponse,
} from '@law-knowledge/building-block';
import { ChatHistoryService } from './message.service';
import { Delete, Get, Param, Query } from '@nestjs/common';
import { GetChatHistoryResponse } from './message.payload';

@ApiController('chatHistory')
export class ChatHistoryController {
  constructor(private readonly chatHistorySvcService: ChatHistoryService) {}

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get all chat history',
    response: GetChatHistoryResponse,
  })
  getChatHistory(@Query() criteria?: Criteria) {
    return this.chatHistorySvcService.getChatHistory({ criteria });
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete chat history',
    params: ['id'],
    response: String,
  })
  deleteChatHistory(@Param('id') id: string) {
    return this.chatHistorySvcService.deleteChatHistory(id);
  }
}
