import { UpdateChatHistoryCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ChatDataService } from '@law-knowledge/building-block';

@CommandHandler(UpdateChatHistoryCommand)
export class UpdateChatHistoryCommandHandler
  implements ICommandHandler<UpdateChatHistoryCommand>
{
  constructor(private readonly dataService: ChatDataService) {}

  async execute(payload: UpdateChatHistoryCommand) {
    return this.dataService.$transaction([
      this.dataService.chatHistory.update({
        where: { id: payload.chat.id },
        data: {
          ...payload,
        },
      }),
    ]);
  }
}
