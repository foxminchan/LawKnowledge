import { Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccessToken, LoginPayload } from '../../@types';
import { ApiController, SwaggerResponse } from '@law-knowledge/shared';

@ApiController('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @SwaggerResponse({
    operation: 'Login account',
    body: LoginPayload,
    response: AccessToken,
  })
  login(@Body() user: LoginPayload) {
    return this.authService.login(user);
  }
}
