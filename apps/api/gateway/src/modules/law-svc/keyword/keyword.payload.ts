/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Keyword {
  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  codification_id?: string;
}

export class KeywordCreatePayload extends Keyword {}

export class KeywordUpdatePayload extends Keyword {
  @ApiProperty()
  id: string;
}

export class KeywordResponse extends Keyword {
  @ApiProperty()
  id: string;
}
