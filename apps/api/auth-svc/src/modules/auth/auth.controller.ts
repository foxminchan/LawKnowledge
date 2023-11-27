import { CommandBus } from '@nestjs/cqrs';
import { Controller } from '@nestjs/common';
import { LoginPayload } from './@types';
import { EventPattern } from '@nestjs/microservices';
import { CreateTokenEvent } from './cqrs/events/create-token.event';

@Controller()
export class AuthController {
  constructor(private commandBus: CommandBus) {}

  @EventPattern({ cmd: 'login' })
  async login(user: LoginPayload) {
    return await this.commandBus.execute(new CreateTokenEvent(user));
  }
}
