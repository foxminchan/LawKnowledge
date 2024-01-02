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
  UserResponse,
  UserCreatePayload,
  UserUpdatePayload,
} from './user.payload';
import { UserService } from './user.service';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@ApiController('user')
export class UserController {
  constructor(private readonly userSvcService: UserService) {}

  @Get(':id')
  @SwaggerResponse({
    operation: 'Get user by id',
    params: ['id'],
    response: UserResponse,
  })
  getUser(@Param('id') id: string) {
    return this.userSvcService.getUser(id);
  }

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get all users',
    response: UserResponse,
  })
  getUsers(@Query() criteria?: Criteria) {
    return this.userSvcService.getUsers(criteria);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create user',
    body: UserCreatePayload,
    response: UserResponse,
  })
  createUser(@Body() data: UserCreatePayload) {
    return this.userSvcService.createUser(data);
  }

  @Put()
  @SwaggerResponse({
    operation: 'Update user',
    body: UserUpdatePayload,
    response: UserResponse,
  })
  updateUser(@Body() data: UserUpdatePayload) {
    return this.userSvcService.updateUser(data);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete user',
    params: ['id'],
    response: UserResponse,
  })
  deleteUser(@Param('id') id: string) {
    return this.userSvcService.deleteUser(id);
  }
}
