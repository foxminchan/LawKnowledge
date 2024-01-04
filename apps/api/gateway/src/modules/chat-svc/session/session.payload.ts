/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty } from '@nestjs/swagger';
import { Criteria } from '@law-knowledge/building-block';

export class ChatSession {
  @ApiProperty()
  user: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  createdAt: Date;
}

export class GetChatSessionsPayload {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  criteria?: Criteria;
}

export class ChatSessionsResponse {
  @ApiProperty()
  data: ChatSession[];

  @ApiProperty()
  total: number;
}

export class UpdateChatSessionPayload extends ChatSession {
  @ApiProperty()
  id: string;
}

export class ChatSessionResponse extends ChatSession {
  @ApiProperty()
  id: string;
}

export class CreateChatSessionPayload extends ChatSession {}
