import { CreateChatHistoryCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ChatDataService } from '@law-knowledge/building-block';

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
