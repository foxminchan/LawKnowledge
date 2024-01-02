/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Heading {
  @ApiProperty()
  name: string;

  @ApiProperty()
  no: number;

  @ApiPropertyOptional()
  topic_id?: string;
}

export class HeadingCreatePayload extends Heading {}

export class HeadingUpdatePayload extends Heading {
  @ApiProperty()
  id: string;
}

export class HeadingResponse extends Heading {
  @ApiProperty()
  id: string;
}
