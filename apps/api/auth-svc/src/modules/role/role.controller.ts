import { Controller } from '@nestjs/common';
import { RoleService } from './role.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateRoleModel, UpdateRoleModel } from '../../models';

@Controller()
export class RoleController {
  constructor(private readonly RoleService: RoleService) {}

  @MessagePattern({ cmd: 'getRoles' })
  getRoles() {
    return this.RoleService.getRoles();
  }

  @MessagePattern({ cmd: 'getRole' })
  getRole(@Payload('id') id: string) {
    return this.RoleService.getRole(id);
  }

  @MessagePattern({ cmd: 'addRole' })
  addRole(@Payload('role') Role: CreateRoleModel) {
    return this.RoleService.addRole(Role);
  }

  @MessagePattern({ cmd: 'updateRole' })
  updateRole(
    @Payload('id') id: string,
    @Payload('role') Role: UpdateRoleModel
  ) {
    return this.RoleService.updateRole(id, Role);
  }

  @MessagePattern({ cmd: 'deleteRole' })
  deleteRole(@Payload('id') id: string) {
    return this.RoleService.deleteRole(id);
  }
}
