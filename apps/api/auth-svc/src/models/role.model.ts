import { IsEnum } from 'class-validator';
import { Roles } from '@law-knowledge/shared';
import { PartialType } from '@nestjs/swagger';

export class CreateRoleModel {
  @IsEnum(Roles, {
    each: true,
    message: 'Vai trò phải là ADMIN, LAWYER hoặc CITIZEN',
  })
  name: string;
}

export class UpdateRoleModel extends PartialType(CreateRoleModel) {}