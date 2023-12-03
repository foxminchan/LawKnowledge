import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateChatHistoryEvent } from '../events';
import { ChatDataService } from '@law-knowledge/data';

@CommandHandler(UpdateChatHistoryEvent)
export class UpdateChatHistoryCommandHandler
  implements ICommandHandler<UpdateChatHistoryEvent>
{
  constructor(private readonly dataService: ChatDataService) {}

  async execute(payload: UpdateChatHistoryEvent) {
    return this.dataService.$transaction([
      this.dataService.chatHistory.update({
        where: { id: payload.id },
        data: {
          ...payload,
        },
      }),
    ]);
  }
}
