import {
  GetRoleEvent,
  GetRolesEvent,
  CreateRoleEvent,
  DeleteRoleEvent,
  UpdateRoleEvent,
} from './cqrs';
import { Controller } from '@nestjs/common';
import { Criteria } from '@law-knowledge/shared';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { CreateRoleModel, UpdateRoleModel } from '../../models';

@Controller()
export class RoleController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @EventPattern({ cmd: 'getRoles' })
  getRoles(criteria?: Criteria) {
    return this.queryBus.execute(new GetRolesEvent(criteria));
  }

  @EventPattern({ cmd: 'getRole' })
  getRole(id: string) {
    return this.queryBus.execute(new GetRoleEvent(id));
  }

  @EventPattern({ cmd: 'addRole' })
  addRole(Role: CreateRoleModel) {
    return this.commandBus.execute(new CreateRoleEvent(Role));
  }

  @EventPattern({ cmd: 'updateRole' })
  updateRole(id: string, role: UpdateRoleModel) {
    return this.commandBus.execute(new UpdateRoleEvent(id, role));
  }

  @EventPattern({ cmd: 'deleteRole' })
  deleteRole(id: string) {
    return this.commandBus.execute(new DeleteRoleEvent(id));
  }
}
