import {
  CreateUserCommand,
  DeleteUserCommand,
  UpdateUserCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { Criteria } from '@law-knowledge/shared';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from './dto';
import { GetUserQuery, GetUsersQuery } from './queries';

@Controller()
export class UserController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @EventPattern({ cmd: 'getUsers' })
  getUsers(criteria?: Criteria) {
    return this.queryBus.execute(new GetUsersQuery(criteria));
  }

  @EventPattern({ cmd: 'getUser' })
  getUser(email: string) {
    return this.queryBus.execute(new GetUserQuery(email));
  }

  @EventPattern({ cmd: 'addUser' })
  addUser(user: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(user));
  }

  @EventPattern({ cmd: 'updateUser' })
  updateUser(user: UpdateUserDto) {
    return this.commandBus.execute(new UpdateUserCommand(user));
  }

  @EventPattern({ cmd: 'deleteUser' })
  deleteUser(id: string) {
    return this.commandBus.execute(new DeleteUserCommand(id));
  }
}
