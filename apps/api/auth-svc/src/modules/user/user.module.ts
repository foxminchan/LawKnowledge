import {
  GetUserQueryHandler,
  GetUsersQueryHandler,
  CreateUserCommandHandler,
  DeleteUserCommandHandler,
  UpdateUserCommandHandler,
} from './cqrs';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from './user.controller';

const CommandHandlers = [
  CreateUserCommandHandler,
  UpdateUserCommandHandler,
  DeleteUserCommandHandler,
];

const QueryHandlers = [GetUserQueryHandler, GetUsersQueryHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...QueryHandlers],
  controllers: [UserController],
})
export class UserModule {}
