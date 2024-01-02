/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty } from '@nestjs/swagger';

export class User {
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
}

export class UserCreatePayload extends User {
  @ApiProperty()
  repassword: string;
}

export class UserUpdatePayload extends User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  repassword: string;
}

export class UserResponse extends User {
  @ApiProperty()
  id: string;
}
