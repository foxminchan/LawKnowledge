import { Injectable } from '@nestjs/common';
import { DataService } from '@law-knowledge/framework';
import { CreateRoleModel, UpdateRoleModel } from '../../models';

@Injectable()
export class RoleService {
  constructor(private readonly dataService: DataService) {}

  getRoles() {
    return this.dataService.roles.findMany();
  }

  getRole(id: string) {
    return this.dataService.roles.findUnique({
      where: { id: id },
    });
  }

  addRole(role: CreateRoleModel) {
    return this.dataService.$transaction([
      this.dataService.roles.create({
        data: role,
      }),
    ]);
  }

  updateRole(id: string, role: UpdateRoleModel) {
    return this.dataService.$transaction([
      this.dataService.roles.update({
        where: { id: id },
        data: role,
      }),
    ]);
  }

  deleteRole(id: string) {
    return this.dataService.$transaction([
      this.dataService.roles.delete({
        where: { id: id },
      }),
    ]);
  }
}
