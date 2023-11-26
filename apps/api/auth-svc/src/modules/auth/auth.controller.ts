import { Controller } from '@nestjs/common';
import { LoginPayload } from '../../@types';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'login' })
  login(@Payload() user: LoginPayload) {
    return this.authService.login(user);
  }
}
