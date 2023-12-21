/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

export class JwtDto {
  sub: string;
  name: string;
  email: string;
  roles: string[];
}

export class TokenDto {
  access_token: string;
  refresh_token: string;
}
