import { UserService } from './user.service';
import { GrpcMethod } from '@nestjs/microservices';
import { JwtAuthGuard } from '@law-knowledge/shared';
import { Controller, UseGuards } from '@nestjs/common';
import { CreateUserModel, UpdateUserModel } from '../../models';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @GrpcMethod('AuthService', 'GetUsers')
  getUsers() {
    return this.userService.getUsers();
  }

  @UseGuards(JwtAuthGuard)
  @GrpcMethod('AuthService', 'GetUser')
  getUser(email: string) {
    return this.userService.getUser(email);
  }

  @UseGuards(JwtAuthGuard)
  @GrpcMethod('AuthService', 'AddUser')
  addUser(user: CreateUserModel) {
    return this.userService.addUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @GrpcMethod('AuthService', 'UpdateUser')
  updateUser(id: string, user: UpdateUserModel) {
    return this.userService.updateUser(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @GrpcMethod('AuthService', 'DeleteUser')
  deleteUser(id: string) {
    return this.userService.deleteUser(id);
  }
}
