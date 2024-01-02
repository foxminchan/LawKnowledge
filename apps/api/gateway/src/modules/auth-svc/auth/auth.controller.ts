/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest } from './auth.interface';
import { AccessToken, LoginPayload } from './auth.payload';
import { ApiController, SwaggerResponse } from '@law-knowledge/building-block';

@ApiController('auth')
export class AuthController {
  constructor(private readonly authSvcService: AuthService) {}

  @Post('login')
  @SwaggerResponse({
    operation: 'Login',
    body: LoginPayload,
    response: AccessToken,
  })
  login(@Body() payload: LoginRequest) {
    return this.authSvcService.login(payload);
  }
}
