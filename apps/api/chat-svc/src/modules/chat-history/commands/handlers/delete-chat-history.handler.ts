import { DeleteChatHistoryCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ChatDataService } from '@law-knowledge/building-block';

@CommandHandler(DeleteChatHistoryCommand)
export class DeleteChatHistoryCommandHandler
  implements ICommandHandler<DeleteChatHistoryCommand>
{
  constructor(private readonly dataService: ChatDataService) {}

  async execute(payload: DeleteChatHistoryCommand) {
    return this.dataService.$transaction([
      this.dataService.chatHistory.delete({
        where: { id: payload.id },
      }),
    ]);
  }
}
