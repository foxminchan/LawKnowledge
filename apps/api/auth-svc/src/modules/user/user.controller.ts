import {
  GetUserEvent,
  GetUsersEvent,
  CreateUserEvent,
  DeleteUserEvent,
  UpdateUserEvent,
} from './cqrs';
import { Controller } from '@nestjs/common';
import { Criteria } from '@law-knowledge/shared';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserModel, UpdateUserModel } from '../../models';

@Controller()
export class UserController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @EventPattern({ cmd: 'getUsers' })
  getUsers(criteria?: Criteria) {
    return this.queryBus.execute(new GetUsersEvent(criteria));
  }

  @EventPattern({ cmd: 'getUser' })
  getUser(email: string) {
    return this.queryBus.execute(new GetUserEvent(email));
  }

  @EventPattern({ cmd: 'addUser' })
  addUser(user: CreateUserModel) {
    return this.commandBus.execute(new CreateUserEvent(user));
  }

  @EventPattern({ cmd: 'updateUser' })
  updateUser(id: string, user: UpdateUserModel) {
    return this.commandBus.execute(new UpdateUserEvent(id, user));
  }

  @EventPattern({ cmd: 'deleteUser' })
  deleteUser(id: string) {
    return this.commandBus.execute(new DeleteUserEvent(id));
  }
}
