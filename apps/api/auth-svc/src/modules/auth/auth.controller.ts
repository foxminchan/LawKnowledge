import { LoginDto } from './dto';
import { CommandBus } from '@nestjs/cqrs';
import { Controller } from '@nestjs/common';
import { CreateTokenCommand } from './commands/';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private commandBus: CommandBus) {}

  @GrpcMethod('AuthService', 'Login')
  async login(user: LoginDto) {
    return await this.commandBus.execute(new CreateTokenCommand(user));
  }
}
