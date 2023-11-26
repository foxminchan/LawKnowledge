import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserModel, UpdateUserModel } from '../../models';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'getUsers' })
  getUsers() {
    return this.userService.getUsers();
  }

  @MessagePattern({ cmd: 'getUser' })
  getUser(@Payload('email') email: string) {
    return this.userService.getUser(email);
  }

  @MessagePattern({ cmd: 'addUser' })
  addUser(@Payload() user: CreateUserModel) {
    return this.userService.addUser(user);
  }

  @MessagePattern({ cmd: 'updateUser' })
  updateUser(
    @Payload('id') id: string,
    @Payload('user') user: UpdateUserModel
  ) {
    return this.userService.updateUser(id, user);
  }

  @MessagePattern({ cmd: 'deleteUser' })
  deleteUser(@Payload('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
