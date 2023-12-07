import {
  Auth,
  NoCache,
  JwtAuthGuard,
  ApiController,
  SwaggerResponse,
} from '@law-knowledge/shared';
import { AuthService } from './auth-svc.service';
import { LoginPayload, RegisterPayload } from './auth-svc.payload';
import { Body, Get, Param, Post, UseGuards } from '@nestjs/common';

@ApiController('auth')
export class AuthController {
  constructor(private readonly authSvcService: AuthService) {}
  @Post('login')
  @SwaggerResponse({
    operation: 'Login',
    body: LoginPayload,
  })
  login(@Body() payload: LoginPayload) {
    return this.authSvcService.login(payload);
  }

  @Post('register')
  @SwaggerResponse({
    operation: 'Register',
    body: RegisterPayload,
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
