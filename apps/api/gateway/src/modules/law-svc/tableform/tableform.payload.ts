/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TableForm {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiPropertyOptional()
  codification_id?: string;

  @ApiPropertyOptional()
  corpus_id?: string;
}

export class TableFormCreatePayload extends TableForm {}

export class TableFormUpdatePayload extends TableForm {
  @ApiProperty()
  id: string;
}

export class TableFormResponse extends TableForm {
  @ApiProperty()
  id: string;
}
