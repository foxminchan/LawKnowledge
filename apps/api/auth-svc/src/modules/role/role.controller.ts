import {
  CreateRoleCommand,
  DeleteRoleCommand,
  UpdateRoleCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateRoleDto, UpdateRoleDto } from './dto';
import { GetRoleQuery, GetRolesQuery } from './queries';
import { Criteria } from '@law-knowledge/building-block';

@Controller()
export class RoleController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @GrpcMethod('RoleService', 'GetRoles')
  getRoles(criteria?: Criteria) {
    return this.queryBus.execute(new GetRolesQuery(criteria));
  }

  @GrpcMethod('RoleService', 'GetRole')
  getRole(id: string) {
    return this.queryBus.execute(new GetRoleQuery(id));
  }

  @GrpcMethod('RoleService', 'AddRole')
  addRole(Role: CreateRoleDto) {
    return this.commandBus.execute(new CreateRoleCommand(Role));
  }

  @GrpcMethod('RoleService', 'UpdateRole')
  updateRole(role: UpdateRoleDto) {
    return this.commandBus.execute(new UpdateRoleCommand(role));
  }

  @GrpcMethod('RoleService', 'DeleteRole')
  deleteRole(id: string) {
    return this.commandBus.execute(new DeleteRoleCommand(id));
  }
}
