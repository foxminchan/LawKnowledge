/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateCodificationDto {
  @IsString({ message: 'Tên chỉ mục văn bản pháp luật phải là chuỗi' })
  @IsNotEmpty({ message: 'Tên chỉ mục văn bản pháp luật không được để trống' })
  @MaxLength(255, {
    message: 'Tên chỉ mục văn bản pháp luật không được vượt quá 255 ký tự',
  })
  name: string;

  @IsString({ message: 'Chỉ mục văn bản pháp luật phải là chuỗi' })
  @MaxLength(255, {
    message: 'Chỉ mục văn bản pháp luật không được vượt quá 255 ký tự',
  })
  indexing: string;

  @IsUUID('4', { message: 'Chỉ mục cha phải là UUID' })
  parent_id: string;
}

export class UpdateCodificationDto extends PartialType(CreateCodificationDto) {
  id: string;
}
