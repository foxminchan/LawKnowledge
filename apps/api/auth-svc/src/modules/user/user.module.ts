import {
  CreateUserCommandHandler,
  UpdateUserCommandHandler,
  DeleteUserCommandHandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from './user.controller';
import { GetUserQueryHandler, GetUsersQueryHandler } from './queries';

const CommandHandlers = [
  CreateUserCommandHandler,
  UpdateUserCommandHandler,
  DeleteUserCommandHandler,
];

const QueryHandlers = [GetUserQueryHandler, GetUsersQueryHandler];

@Module({
  imports: [CqrsModule],
  providers: [...QueryHandlers, ...CommandHandlers],
  controllers: [UserController],
})
export class UserModule {}
