import { CreateChatHistoryEvent } from '../events';
import { ChatDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateChatHistoryEvent)
export class CreateChatHistoryCommandHandler
  implements ICommandHandler<CreateChatHistoryEvent>
{
	constructor(private readonly dataService: ChatDataService) { }
	
  execute(payload: CreateChatHistoryEvent) {
    return this.dataService.$transaction([
      this.dataService.chatHistory.create({
        data: payload.chat,
      }),
    ]);
  }
}
