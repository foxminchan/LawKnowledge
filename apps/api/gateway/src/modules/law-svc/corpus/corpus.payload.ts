/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Corpus {
  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  indexing?: string;

  @ApiPropertyOptional()
  heading_id?: string;

  @ApiPropertyOptional()
  parent_id?: string;

  @ApiPropertyOptional()
  related_id?: string;

  @ApiPropertyOptional()
  codification_id?: string;
}

export class CorpusCreatePayload extends Corpus {}

export class CorpusUpdatePayload extends Corpus {
  @ApiProperty()
  id: string;
}

export class CorpusResponse extends Corpus {
  @ApiProperty()
  id: string;
}
