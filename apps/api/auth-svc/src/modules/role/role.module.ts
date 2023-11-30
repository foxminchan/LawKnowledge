import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { CqrsModule } from '@nestjs/cqrs';
import {
  CreateRoleCommandHandler,
  DeleteRoleCommandHandler,
  UpdateRoleCommandHandler,
} from './cqrs/commands';
import { GetRoleQueryHandler } from './cqrs';

const CommandHandlers = [
  CreateRoleCommandHandler,
  DeleteRoleCommandHandler,
  UpdateRoleCommandHandler,
];

const QueryHandlers = [GetRoleQueryHandler, GetRoleQueryHandler];

@Module({
  imports: [CqrsModule],
  controllers: [RoleController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class RoleModule {}
