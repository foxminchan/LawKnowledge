import { Controller } from '@nestjs/common';
import { LoginPayload } from '../../@types';
import { AuthService } from './auth.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod('AuthService', 'Login')
  login(user: LoginPayload) {
    return this.authService.login(user);
  }
}
