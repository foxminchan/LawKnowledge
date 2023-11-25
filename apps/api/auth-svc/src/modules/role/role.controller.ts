import { Controller } from '@nestjs/common';
import { RoleService } from './role.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateRoleModel, UpdateRoleModel } from '../../models';

@Controller()
export class RoleController {
  constructor(private readonly RoleService: RoleService) {}

  @GrpcMethod('RoleService', 'GetRoles')
  getRoles() {
    return this.RoleService.getRoles();
  }

  @GrpcMethod('RoleService', 'GetRole')
  getRole(id: string) {
    return this.RoleService.getRole(id);
  }

  @GrpcMethod('RoleService', 'AddRole')
  addRole(Role: CreateRoleModel) {
    return this.RoleService.addRole(Role);
  }

  @GrpcMethod('RoleService', 'UpdateRole')
  updateRole(id: string, Role: UpdateRoleModel) {
    return this.RoleService.updateRole(id, Role);
  }

  @GrpcMethod('RoleService', 'DeleteRole')
  deleteRole(id: string) {
    return this.RoleService.deleteRole(id);
  }
}
