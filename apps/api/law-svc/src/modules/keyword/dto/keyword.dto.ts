/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateKeywordDto {
  @IsString({ message: 'Tên từ khóa phải là chuỗi' })
  @IsNotEmpty({ message: 'Tên từ khóa không được để trống' })
  @MaxLength(255, { message: 'Tên từ khóa không được vượt quá 255 ký tự' })
  name: string;

  @IsUUID('4', { message: 'Mã chỉ mục văn pháp luật không hợp lệ' })
  codification_id?: string;
}

export class UpdateKeywordDto extends PartialType(CreateKeywordDto) {
  @IsUUID('4', { message: 'Mã từ khóa không hợp lệ' })
  id: string;
}
