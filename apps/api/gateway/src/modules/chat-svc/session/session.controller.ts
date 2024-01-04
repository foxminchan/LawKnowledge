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
import {
  CreateChatSessionPayload,
  UpdateChatSessionPayload,
} from './session.payload';
import { ChatSessionService } from './session.service';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@ApiController('chatSession')
export class ChatSessionController {
  constructor(private readonly chatSessionSvcService: ChatSessionService) {}

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get all chat session',
    params: ['user_id'],
    response: String,
  })
  getChatSession(
    @Param('user_id') user_id: string,
    @Query() criteria?: Criteria,
  ) {
    return this.chatSessionSvcService.getChatSessions({ user_id, criteria });
  }

  @Get(':id')
  @SwaggerResponse({
    operation: 'Get chat session',
    params: ['id'],
    response: String,
  })
  getChatSessionById(@Param('id') id: string) {
    return this.chatSessionSvcService.getChatSession(id);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create chat session',
    body: CreateChatSessionPayload,
    response: String,
  })
  createChatSession(@Body() request: CreateChatSessionPayload) {
    return this.chatSessionSvcService.createChatSession(request);
  }

  @Put()
  @SwaggerResponse({
    operation: 'Update chat session',
    body: UpdateChatSessionPayload,
    response: String,
  })
  updateChatSession(@Body() request: UpdateChatSessionPayload) {
    return this.chatSessionSvcService.updateChatSession(request);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete chat session',
    params: ['id'],
    response: String,
  })
  deleteChatSession(@Param('id') id: string) {
    return this.chatSessionSvcService.deleteChatSession(id);
  }
}
