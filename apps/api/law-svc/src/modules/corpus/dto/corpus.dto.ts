/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateCorpusDto {
  @IsString({ message: 'Tên chỉ mục pháp điển phải là chuỗi' })
  @IsNotEmpty({ message: 'Tên chỉ mục pháp điển không được để trống' })
  @MaxLength(255, {
    message: 'Tên chỉ mục pháp điển không được vượt quá 255 ký tự',
  })
  name: string;

  @IsString({ message: 'Chỉ mục pháp điển phải là chuỗi' })
  @MaxLength(50, {
    message: 'Chỉ mục pháp điển không được vượt quá 50 ký tự',
  })
  indexing: string;

  @IsUUID('4', { message: 'Mã đề mục pháp điển phải là UUID' })
  heading_id: string;

  @IsUUID('4', { message: 'Mã chỉ mục cha phải là UUID' })
  parent_id: string;

  @IsUUID('4', { message: 'Mã chỉ mục liên quan phải là UUID' })
  related_id: string;

  @IsUUID('4', { message: 'Mã chỉ mục văn bản pháp luật phải là UUID' })
  codification_id: string;
}

export class UpdateCorpusDto extends PartialType(CreateCorpusDto) {
  @IsUUID('4', { message: 'Mã chỉ mục pháp điển không hợp lệ' })
  id: string;
}
