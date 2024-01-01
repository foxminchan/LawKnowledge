/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  IsEnum,
  IsUUID,
  IsString,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { TableFormType } from '@law-knowledge/building-block';

export class CreateTableFormDto {
  @IsString({ message: 'Tên bảng/biểu mẫu phải là chuỗi' })
  @MaxLength(255, {
    message: 'Tên bảng/biểu mẫu không được vượt quá 255 ký tự',
  })
  @IsNotEmpty({ message: 'Tên bảng/biểu mẫu không được để trống' })
  name: string;

  @IsEnum(TableFormType, {
    message: 'Loại bảng/biểu mẫu không hợp lệ',
  })
  type: TableFormType = TableFormType.TABLE;

  @IsUUID('4', { message: 'Mã văn bản pháp luật không hợp lệ' })
  codification_id: string;

  @IsUUID('4', { message: 'Mã pháp điển không hợp lệ' })
  corpus_id: string;
}

export class UpdateTableFormDto extends PartialType(CreateTableFormDto) {
  @IsUUID('4', { message: 'Mã bảng/biểu mẫu không hợp lệ' })
  id: string;
}
