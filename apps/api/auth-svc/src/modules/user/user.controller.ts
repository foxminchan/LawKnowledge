/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateUserCommand,
  DeleteUserCommand,
  UpdateUserCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from './dto';
import { GetUserQuery, GetUsersQuery } from './queries';
import { Criteria } from '@law-knowledge/building-block';

@Controller()
export class UserController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @GrpcMethod('UserService', 'GetUsers')
  getUsers(criteria?: Criteria) {
    return this.queryBus.execute(new GetUsersQuery(criteria));
  }

  @GrpcMethod('UserService', 'GetUser')
  getUser(email: string) {
    return this.queryBus.execute(new GetUserQuery(email));
  }

  @GrpcMethod('UserService', 'AddUser')
  addUser(user: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(user));
  }

  @GrpcMethod('UserService', 'UpdateUser')
  updateUser(user: UpdateUserDto) {
    return this.commandBus.execute(new UpdateUserCommand(user));
  }

  @GrpcMethod('UserService', 'DeleteUser')
  deleteUser(id: string) {
    return this.commandBus.execute(new DeleteUserCommand(id));
  }
}
