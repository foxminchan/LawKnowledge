import {
  CreateRoleCommand,
  DeleteRoleCommand,
  UpdateRoleCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { CreateRoleDto, UpdateRoleDto } from './dto';
import { GetRoleQuery, GetRolesQuery } from './queries';
import { Criteria } from '@law-knowledge/building-block';

@Controller()
export class RoleController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @EventPattern({ cmd: 'getRoles' })
  getRoles(criteria?: Criteria) {
    return this.queryBus.execute(new GetRolesQuery(criteria));
  }

  @EventPattern({ cmd: 'getRole' })
  getRole(id: string) {
    return this.queryBus.execute(new GetRoleQuery(id));
  }

  @EventPattern({ cmd: 'addRole' })
  addRole(Role: CreateRoleDto) {
    return this.commandBus.execute(new CreateRoleCommand(Role));
  }

  @EventPattern({ cmd: 'updateRole' })
  updateRole(role: UpdateRoleDto) {
    return this.commandBus.execute(new UpdateRoleCommand(role));
  }

  @EventPattern({ cmd: 'deleteRole' })
  deleteRole(id: string) {
    return this.commandBus.execute(new DeleteRoleCommand(id));
  }
}
