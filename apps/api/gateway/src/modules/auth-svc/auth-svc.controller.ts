/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  Auth,
  NoCache,
  JwtAuthGuard,
  ApiController,
  SwaggerResponse,
} from '@law-knowledge/building-block';
import {
  User,
  AccessToken,
  LoginPayload,
  RegisterPayload,
} from './auth-svc.payload';
import { AuthService } from './auth-svc.service';
import { Body, Get, Param, Post, UseGuards } from '@nestjs/common';
import { LoginRequest, RegisterRequest } from './auth-svc.interface';

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

  @Post('register')
  @SwaggerResponse({
    operation: 'Register',
    body: RegisterPayload,
    response: User,
  })
  register(@Body() payload: RegisterRequest) {
    return this.authSvcService.register(payload);
  }

  @Auth()
  @NoCache()
  @Get(':email')
  @UseGuards(JwtAuthGuard)
  @SwaggerResponse({
    operation: 'Get User',
    params: ['email'],
    response: User,
  })
  getUser(@Param('email') email: string) {
    return this.authSvcService.getUser(email);
  }
}
