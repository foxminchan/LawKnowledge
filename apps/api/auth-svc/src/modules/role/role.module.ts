import {
  CreateRoleCommandHandler,
  DeleteRoleCommandHandler,
  UpdateRoleCommandHandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { RoleController } from './role.controller';
import { GetRoleQueryHandler, GetRolesQueryHandler } from './queries';

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
