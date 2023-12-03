import { GetChatHistoryEvent } from '../events';
import { ChatDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetChatHistoryEvent)
export class GetChatHistoryQueryHandler
  implements IQueryHandler<GetChatHistoryEvent>
{
  constructor(public readonly dataService: ChatDataService) {}

  execute(payload: GetChatHistoryEvent) {
    return this.dataService.chatHistory.findUnique({
      where: {
        id: payload.id,
      },
    });
  }
}
