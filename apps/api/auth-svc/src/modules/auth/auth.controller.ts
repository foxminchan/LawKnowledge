import { AuthService } from './auth.service';
import { GrpcMethod } from '@nestjs/microservices';
import { AccessToken, LoginPayload } from '../../@types';
import { ApiController, SwaggerResponse } from '@law-knowledge/shared';

@ApiController('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @SwaggerResponse({
    operation: 'Login account',
    body: LoginPayload,
    response: AccessToken,
  })
  @GrpcMethod('AuthService', 'Login')
  login(user: LoginPayload) {
    return this.authService.login(user);
  }
}
