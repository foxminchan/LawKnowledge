import { UpdateChatHistoryDto } from '../../dto';

export class UpdateChatHistoryCommand {
  constructor(public readonly chat: UpdateChatHistoryDto) {}
}
