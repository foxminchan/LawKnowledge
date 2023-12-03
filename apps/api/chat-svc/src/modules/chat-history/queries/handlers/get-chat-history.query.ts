import { GetChatHistoryQuery } from '../impl';
import { ChatDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

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
