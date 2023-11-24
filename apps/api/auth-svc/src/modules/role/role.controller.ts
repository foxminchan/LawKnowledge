import {
  CreateRoleModel,
  UpdateRoleModel,
  ResponseRoleModel,
} from '../../models';
import { RoleService } from './role.service';
import { Get, Put, Post, Body, Param, Delete } from '@nestjs/common';
import { Auth, ApiController, SwaggerResponse } from '@law-knowledge/shared';

@ApiController('Role')
export class RoleController {
  constructor(
    private readonly RoleService: RoleService
  ) {}

  @Auth()
  @Get()
  @SwaggerResponse({
    operation: 'Role fetch',
    response: ResponseRoleModel,
  })
  getRoles() {
    return this.RoleService.getRoles();
  }

  @Auth()
  @Get(':id')
  @SwaggerResponse({
    operation: 'Role fetch by id',
    params: ['id'],
    response: ResponseRoleModel,
  })
  getRole(@Param('id') id: string) {
    return this.RoleService.getRole(id);
  }

  @Auth()
  @Post()
  @SwaggerResponse({
    operation: 'Create Role',
    body: CreateRoleModel,
  })
  addRole(@Body() Role: CreateRoleModel) {
    return this.RoleService.addRole(Role);
  }

  @Auth()
  @Put(':id')
  @SwaggerResponse({
    operation: 'Update Role',
    params: ['id'],
    body: UpdateRoleModel,
  })
  updateRole(@Param('id') id: string, @Body() Role: UpdateRoleModel) {
    return this.RoleService.updateRole(id, Role);
  }

  @Auth()
  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete Role',
    params: ['id'],
  })
  deleteRole(@Param('id') id: string) {
    return this.RoleService.deleteRole(id);
  }
}
