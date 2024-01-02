/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Document {
  @ApiProperty()
  name: string;

  @ApiProperty()
  content: string;

  @ApiPropertyOptional()
  codification_id?: string;

  @ApiPropertyOptional()
  heading_id?: string;
}

export class DocumentCreatePayload extends Document {}

export class DocumentUpdatePayload extends Document {
  @ApiProperty()
  id: string;
}

export class DocumentResponse extends Document {
  @ApiProperty()
  id: string;
}

export class ContextPayload {
  @ApiProperty()
  context: string;
}
