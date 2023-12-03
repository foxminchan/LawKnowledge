import {
  CreateUserCommandHandler,
  UpdateUserCommandHandler,
  DeleteUserCommandHandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CreateUserSaga } from './saga';
import { CqrsModule } from '@nestjs/cqrs';
import { UserCreatedHandler } from './events';
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
  providers: [
    ...QueryHandlers,
    ...CommandHandlers,
    UserCreatedHandler,
    CreateUserSaga,
  ],
  controllers: [UserController],
})
export class UserModule {}
