import {
  CreateRoleModel,
  UpdateRoleModel,
  ResponseRoleModel,
} from '../../models';
import { RoleService } from './role.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Auth, ApiController, SwaggerResponse } from '@law-knowledge/shared';

@ApiController('Role')
export class RoleController {
  constructor(private readonly RoleService: RoleService) {}

  @Auth()
  @SwaggerResponse({
    operation: 'Role fetch',
    response: ResponseRoleModel,
  })
  @GrpcMethod('RoleService', 'GetRoles')
  getRoles() {
    return this.RoleService.getRoles();
  }

  @Auth()
  @SwaggerResponse({
    operation: 'Role fetch by id',
    params: ['id'],
    response: ResponseRoleModel,
  })
  @GrpcMethod('RoleService', 'GetRole')
  getRole(id: string) {
    return this.RoleService.getRole(id);
  }

  @Auth()
  @SwaggerResponse({
    operation: 'Create Role',
    body: CreateRoleModel,
  })
  @GrpcMethod('RoleService', 'AddRole')
  addRole(Role: CreateRoleModel) {
    return this.RoleService.addRole(Role);
  }

  @Auth()
  @SwaggerResponse({
    operation: 'Update Role',
    params: ['id'],
    body: UpdateRoleModel,
  })
  @GrpcMethod('RoleService', 'UpdateRole')
  updateRole(id: string, Role: UpdateRoleModel) {
    return this.RoleService.updateRole(id, Role);
  }

  @Auth()
  @SwaggerResponse({
    operation: 'Delete Role',
    params: ['id'],
  })
  @GrpcMethod('RoleService', 'DeleteRole')
  deleteRole(id: string) {
    return this.RoleService.deleteRole(id);
  }
}
