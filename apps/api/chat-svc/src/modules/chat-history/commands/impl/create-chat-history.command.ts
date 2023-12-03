import { CreateChatHistoryDto } from '../../dto';

export class CreateChatHistoryCommand {
  constructor(public readonly chat: CreateChatHistoryDto) {}
}
