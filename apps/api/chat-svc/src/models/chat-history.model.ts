import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateChatHistoryModel {
  @IsNotEmpty({ message: 'Tin nhắn không được để trống' })
  @MaxLength(500, { message: 'Tin nhắn không được quá 500 ký tự' })
  question: string;

  answer: string;

  date: string;

  @IsNotEmpty({ message: 'User id không được để trống' })
  user_id: string;
}

export class UpdateChatHistoryModel extends PartialType(
  CreateChatHistoryModel
) {}
