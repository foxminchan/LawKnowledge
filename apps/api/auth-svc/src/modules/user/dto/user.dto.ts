/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  IsEmail,
  Matches,
  IsString,
  MaxLength,
  MinLength,
  IsNotEmpty,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { IsMatch } from '@law-knowledge/building-block';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Họ tên không được để trống' })
  @MaxLength(50, { message: 'Họ tên không được quá 50 ký tự' })
  @IsString({ message: 'Họ tên phải là chuỗi' })
  name: string;

  @IsEmail({}, { message: 'Email không hợp lệ' })
  @MaxLength(50, { message: 'Email không được quá 50 ký tự' })
  email: string;

  @IsNotEmpty({ message: 'Số điện thoại không được để trống' })
  @Matches(/^\d{10}$/, { message: 'Số điện thoại không hợp lệ' })
  phone: string;

  @IsNotEmpty({ message: 'Thông tin CMND/CCCD không được để trống' })
  @MaxLength(12, { message: 'Thẻ căn cước không được quá 12 ký tự' })
  @MinLength(9, { message: 'Số chứng minh nhân dân không được dưới 9 ký tự' })
  card: string;

  @IsNotEmpty({ message: 'Địa chỉ không được để trống' })
  @MaxLength(100, { message: 'Địa chỉ không được quá 100 ký tự' })
  address: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số',
    },
  )
  password: string;

  @IsMatch('password', { message: 'Mật khẩu không khớp' })
  repassword: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: string;
}
