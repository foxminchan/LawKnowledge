import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateDocumentModel {
  @IsString({ message: 'Tên văn bản phải là chuỗi' })
  @IsNotEmpty({ message: 'Tên văn bản không được để trống' })
  name: string;

  @IsString({ message: 'Chỉ mục phải là chuỗi' })
  indexing: string;

  @IsString({ message: 'Mã PC phải là chuỗi' })
  mpc: string;

  @IsUUID('4', { message: 'Mã đề mục không hợp lệ' })
  heading_id: string;
}

export class UpdateDocumentModel extends PartialType(CreateDocumentModel) {}
