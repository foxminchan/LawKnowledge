import { Body, Get, Post } from '@nestjs/common';
import { AuthSvcService } from './auth-svc.service';
import { ApiController, SwaggerResponse } from '@law-knowledge/shared';
import { LoginPayload } from '../../@types/login.payload';

@ApiController('auth')
export class AuthSvcController {
  constructor(private readonly authSvcService: AuthSvcService) {}

  @Get('roles')
  getRoles() {
    return this.authSvcService.getRoles();
  }

  @Post('login')
  @SwaggerResponse({
    operation: 'Login',
    body: LoginPayload,
  })
  login(@Body() payload: LoginPayload) {
    return this.authSvcService.login(payload);
  }
}
