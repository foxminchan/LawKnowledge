/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateDocumentDto {
  @IsString({ message: 'Tên văn bản phải là chuỗi' })
  @IsNotEmpty({ message: 'Tên văn bản không được để trống' })
  name: string;

  @IsString({ message: 'Nội dung văn bản phải là chuỗi' })
  content: string;

  @IsUUID('4', { message: 'Mã văn bản pháp luật không hợp lệ' })
  codification_id?: string;

  @IsUUID('4', { message: 'Mã đề mục không hợp lệ' })
  heading_id?: string;
}

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {
  @IsUUID('4', { message: 'Mã văn bản không hợp lệ' })
  id: string;
}
