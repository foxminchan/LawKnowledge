/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  Key,
  ApiController,
  SwaggerResponse,
} from '@law-knowledge/building-block';
import { Get } from '@nestjs/common';
import { ChatService } from './chat.service';

@ApiController('chat')
export class ChatController {
  constructor(private readonly chatSvcService: ChatService) {}

  @Key()
  @Get()
  @SwaggerResponse({
    operation: 'Embedding data',
  })
  embedding() {
    return this.chatSvcService.vectorize();
  }
}
