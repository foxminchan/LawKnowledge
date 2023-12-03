import { GetChatHistoriesQuery } from '../impl';
import { ChatDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetChatHistoriesQuery)
export class GetChatHistoriesQueryHandler
  implements IQueryHandler<GetChatHistoriesQuery>
{
  constructor(public readonly dataService: ChatDataService) {}

  execute(payload: GetChatHistoriesQuery) {
    return this.dataService.chatHistory.findMany({
      ...constructQueryOptions(payload.criteria),
    });
  }
}
