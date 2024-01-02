/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  Criteria,
  ApiController,
  SwaggerResponse,
  PagingSwaggerResponse,
} from '@law-knowledge/building-block';
import {
  RoleResponse,
  RoleCreatePayload,
  RoleUpdatePayload,
} from './role.payload';
import { RoleService } from './role.service';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@ApiController('role')
export class RoleController {
  constructor(private readonly roleSvcService: RoleService) {}

  @Get(':id')
  @SwaggerResponse({
    operation: 'Get role by id',
    params: ['id'],
    response: RoleResponse,
  })
  getRole(@Param('id') id: string) {
    return this.roleSvcService.getRole(id);
  }

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get all roles',
    response: RoleResponse,
  })
  getRoles(@Query() criteria?: Criteria) {
    return this.roleSvcService.getRoles(criteria);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create role',
    body: RoleCreatePayload,
    response: RoleResponse,
  })
  createRole(@Body() data: RoleCreatePayload) {
    return this.roleSvcService.createRole(data);
  }

  @Put()
  @SwaggerResponse({
    operation: 'Update role',
    body: RoleUpdatePayload,
    response: RoleResponse,
  })
  updateRole(@Body() data: RoleUpdatePayload) {
    return this.roleSvcService.updateRole(data);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete role',
    params: ['id'],
    response: RoleResponse,
  })
  deleteRole(@Param('id') id: string) {
    return this.roleSvcService.deleteRole(id);
  }
}
