import {
  IsUUID,
  IsNumber,
  IsString,
  MaxLength,
  IsPositive,
  IsNotEmpty,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateHeadingDto {
  @IsString({ message: 'Tên chủ đề phải là chuỗi' })
  @MaxLength(255, { message: 'Tên chủ đề không được quá 255 ký tự' })
  @IsNotEmpty({ message: 'Tên chủ đề không được để trống' })
  name: string;

  @IsNumber({}, { message: 'Thứ tự phải là số' })
  @IsPositive({ message: 'Thứ tự phải là số dương' })
  no: number;

  @IsUUID('4', { message: 'Mã chủ đề không hợp lệ' })
  topic_id: string;
}

export class UpdateHeadingDto extends PartialType(CreateHeadingDto) {
  id: string;
}
