/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Topic {
  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  no?: number;
}

export class TopicCreatePayload extends Topic {}

export class TopicUpdatePayload extends Topic {
  @ApiProperty()
  id: string;
}

export class TopicResponse extends Topic {
  @ApiProperty()
  id: string;
}
