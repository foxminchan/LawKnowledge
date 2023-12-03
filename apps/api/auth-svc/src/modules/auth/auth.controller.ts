import { LoginDto } from './dto';
import { CommandBus } from '@nestjs/cqrs';
import { Controller } from '@nestjs/common';
import { CreateTokenCommand } from './commands/';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private commandBus: CommandBus) {}

  @EventPattern({ cmd: 'login' })
  async login(user: LoginDto) {
    return await this.commandBus.execute(new CreateTokenCommand(user));
  }
}
