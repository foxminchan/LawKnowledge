import { Injectable } from '@nestjs/common';
import { DataService } from '@law-knowledge/framework';
import { CreateUserModel, UpdateUserModel } from '../../models';

@Injectable()
export class UserService {
  constructor(private readonly dataService: DataService) {}

  getUsers() {
    return this.dataService.user.findMany();
  }

  getUser(id: string) {
    return this.dataService.user.findUnique({
      where: { id: id },
    });
  }

  addUser(user: CreateUserModel) {
    return this.dataService.$transaction([
      this.dataService.user.create({
        data: user,
      }),
    ]);
  }

  updateUser(id: string, user: UpdateUserModel) {
    return this.dataService.$transaction([
      this.dataService.user.update({
        where: { id: id },
        data: user,
      }),
    ]);
  }

  deleteUser(id: string) {
    return this.dataService.$transaction([
      this.dataService.user.delete({
        where: { id: id },
      }),
    ]);
  }
}
