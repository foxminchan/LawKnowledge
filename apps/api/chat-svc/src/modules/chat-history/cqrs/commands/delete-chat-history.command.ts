import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteChatHistoryEvent } from '../events';
import { ChatDataService } from '@law-knowledge/data';

@CommandHandler(DeleteChatHistoryEvent)
export class DeleteChatHistoryCommandHandler
  implements ICommandHandler<DeleteChatHistoryEvent>
{
  constructor(private readonly dataService: ChatDataService) {}

  async execute(payload: DeleteChatHistoryEvent) {
    return this.dataService.$transaction([
      this.dataService.chatHistory.delete({
        where: { id: payload.id },
      }),
    ]);
  }
}
