import { IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserRoleModel {
  @ApiProperty()
  @IsNotEmpty({ message: 'Mã người dùng không được để trống' })
  user_id: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Mã vai trò không được để trống' })
  role_id: string;
}

export class UpdateUserRoleModel extends PartialType(CreateUserRoleModel) {}
