import { Injectable } from '@nestjs/common';
import { DataService } from '@law-knowledge/framework';
import { CreateUserModel, UpdateUserModel } from '../../models';
import { CryptoUtils } from '@law-knowledge/shared';

@Injectable()
export class UserService {
  constructor(private readonly dataService: DataService) {}

  getUsers() {
    return this.dataService.user.findMany({
      include: {
        UserRoles: true,
      },
    });
  }

  getUser(email: string) {
    return this.dataService.user.findUnique({
      where: { email: email },
      include: {
        UserRoles: true,
      },
    });
  }

  async addUser(user: CreateUserModel) {
    return this.dataService.$transaction([
      this.dataService.user.create({
        data: {
          ...user,
          password: await CryptoUtils.hashString(user.password),
          UserRoles: {
            create: [
              {
                role_id: '538cca28-8e18-47e7-8b6f-63c5a5ba386a',
              },
            ],
          },
        },
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
