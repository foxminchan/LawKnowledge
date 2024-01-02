/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Codification {
  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  indexing?: string;

  @ApiPropertyOptional()
  parent_id?: string;
}

export class CodificationCreatePayload extends Codification {}

export class CodificationUpdatePayload extends Codification {
  @ApiProperty()
  id: string;
}

export class CodificationResponse extends Codification {
  @ApiProperty()
  id: string;
}
