/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty, PartialType } from '@nestjs/swagger';

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

export class RegisterPayload {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  card: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  repassword: string;
}

export class User extends PartialType(RegisterPayload) {
  @ApiProperty()
  id: string;
}
