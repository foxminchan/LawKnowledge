import {
  CreateUserModel,
  ResponseUserModel,
  UpdateUserModel,
} from '../../models';
import { UserService } from './user.service';
import { JwtAuthGuard } from '@law-knowledge/shared';
import { Auth, ApiController, SwaggerResponse } from '@law-knowledge/shared';
import { Get, Put, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';

@ApiController('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Auth()
  @Get()
  @SwaggerResponse({
    operation: 'User fetch',
    response: ResponseUserModel,
  })
  getUsers() {
    return this.userService.getUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Auth()
  @Get(':id')
  @SwaggerResponse({
    operation: 'User fetch by id',
    params: ['id'],
    response: ResponseUserModel,
  })
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Auth()
  @Post()
  @SwaggerResponse({
    operation: 'Create user',
    body: CreateUserModel,
  })
  addUser(@Body() user: CreateUserModel) {
    return this.userService.addUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Auth()
  @Put(':id')
  @SwaggerResponse({
    operation: 'Update user',
    params: ['id'],
    body: UpdateUserModel,
  })
  updateUser(@Param('id') id: string, @Body() user: UpdateUserModel) {
    return this.userService.updateUser(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Auth()
  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete user',
    params: ['id'],
  })
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
