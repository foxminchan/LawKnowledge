import { ICommand } from '@nestjs/cqrs';
import { UpdateChatHistoryDto } from '../../dto';

export class UpdateChatHistoryCommand implements ICommand {
  constructor(public readonly chat: UpdateChatHistoryDto) {}
}
