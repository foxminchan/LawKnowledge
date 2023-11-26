import {
  User,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
} from '../../@types';
import {
  Auth,
  JwtAuthGuard,
  ApiController,
  SwaggerResponse,
  NoCache,
} from '@law-knowledge/shared';
import { BaseResponse } from '../../common';
import { AuthSvcService } from './auth-svc.service';
import { Body, Get, Param, Post, UseGuards } from '@nestjs/common';

@ApiController('auth')
export class AuthSvcController {
  constructor(private readonly authSvcService: AuthSvcService) {}
  @Post('login')
  @SwaggerResponse({
    operation: 'Login',
    body: LoginPayload,
    response: BaseResponse<LoginResponse>,
  })
  login(@Body() payload: LoginPayload) {
    return this.authSvcService.login(payload);
  }

  @Post('register')
  @SwaggerResponse({
    operation: 'Register',
    body: RegisterPayload,
    response: BaseResponse<User>,
  })
  register(@Body() payload: RegisterPayload) {
    return this.authSvcService.register(payload);
  }

  @Auth()
  @NoCache()
  @Get(':email')
  @UseGuards(JwtAuthGuard)
  @SwaggerResponse({
    operation: 'Get User',
    params: ['email'],
  })
  getUser(@Param('email') email: string) {
    return this.authSvcService.getUser(email);
  }
}
