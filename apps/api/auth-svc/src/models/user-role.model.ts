import { IsNotEmpty, IsUUID } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserRoleModel {
  @IsNotEmpty({ message: 'Mã người dùng không được để trống' })
  @IsUUID('4', { message: 'Mã người dùng không hợp lệ' })
  user_id: string;

  @IsNotEmpty({ message: 'Mã vai trò không được để trống' })
  @IsUUID('4', { message: 'Mã vai trò không hợp lệ' })
  role_id: string;
}

export class UpdateUserRoleModel extends PartialType(CreateUserRoleModel) {}
