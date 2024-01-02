/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty } from '@nestjs/swagger';

export class LoginPayload {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class AccessToken {
  @ApiProperty()
  access_token: string;
}
