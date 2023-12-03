import { CreateChatHistoryCommand } from '../impl';
import { ChatDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateChatHistoryCommand)
export class CreateChatHistoryCommandHandler
  implements ICommandHandler<CreateChatHistoryCommand>
{
  constructor(private readonly dataService: ChatDataService) {}

  execute(payload: CreateChatHistoryCommand) {
    return this.dataService.$transaction([
      this.dataService.chatHistory.create({
        data: payload.chat,
      }),
    ]);
  }
}
