/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Criteria } from '@law-knowledge/building-block';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ChatHistory {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  question: string;

  @ApiProperty()
  answer: string;

  @ApiProperty()
  session_id: string;
}

export class GetChatHistoryRequest {
  @ApiPropertyOptional()
  criteria?: Criteria;
}

export class GetChatHistoryResponse {
  @ApiProperty({ type: [ChatHistory] })
  chat_history: ChatHistory[];

  @ApiProperty()
  total: number;
}
