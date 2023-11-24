import { IsEnum } from 'class-validator';
import { Roles } from '@law-knowledge/shared';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateRoleModel {
  @ApiProperty({ enum: Roles, default: Roles.CITIZEN })
  @IsEnum(Roles, {
    each: true,
    message: 'Vai trò phải là ADMIN, LAWYER hoặc CITIZEN',
  })
  name: string;
}

export class UpdateRoleModel extends PartialType(CreateRoleModel) {}

export class ResponseRoleModel extends PartialType(CreateRoleModel) {
  @ApiProperty()
  id: string;
}
