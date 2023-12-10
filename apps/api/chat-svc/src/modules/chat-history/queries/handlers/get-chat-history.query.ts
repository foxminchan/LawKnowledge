import { GetChatHistoryQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ChatDataService } from '@law-knowledge/building-block';

@QueryHandler(GetChatHistoryQuery)
export class GetChatHistoryQueryHandler
  implements IQueryHandler<GetChatHistoryQuery>
{
  constructor(public readonly dataService: ChatDataService) {}

  execute(payload: GetChatHistoryQuery) {
    return this.dataService.chatHistory.findUnique({
      where: {
        id: payload.id,
      },
    });
  }
}
