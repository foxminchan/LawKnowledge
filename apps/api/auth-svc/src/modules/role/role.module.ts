import {
  GetRoleQueryHandler,
  GetRolesQueryHandler,
  CreateRoleCommandHandler,
  DeleteRoleCommandHandler,
  UpdateRoleCommandHandler,
} from './cqrs';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { RoleController } from './role.controller';

const CommandHandlers = [
  CreateRoleCommandHandler,
  DeleteRoleCommandHandler,
  UpdateRoleCommandHandler,
];

const QueryHandlers = [GetRoleQueryHandler, GetRolesQueryHandler];

@Module({
  imports: [CqrsModule],
  controllers: [RoleController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class RoleModule {}
