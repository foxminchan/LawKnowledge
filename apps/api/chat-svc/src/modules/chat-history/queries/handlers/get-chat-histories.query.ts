import {
  ChatDataService,
  constructQueryOptions,
} from '@law-knowledge/building-block';
import { GetChatHistoriesQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

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
