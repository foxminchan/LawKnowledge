import { ICommand } from '@nestjs/cqrs';
import { CreateChatHistoryDto } from '../../dto';

export class CreateChatHistoryCommand implements ICommand {
  constructor(public readonly chat: CreateChatHistoryDto) {}
}
