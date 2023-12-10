import {
  ChatDataService,
  constructQueryOptions,
} from '@law-knowledge/building-block';
import { GetChatHistoriesByUserQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetChatHistoriesByUserQuery)
export class GetChatHistoriesByUserQueryHandler
  implements IQueryHandler<GetChatHistoriesByUserQuery>
{
  constructor(public readonly dataService: ChatDataService) {}

  execute(payload: GetChatHistoriesByUserQuery) {
    return this.dataService.chatHistory.findMany({
      ...constructQueryOptions(payload.criteria, {
        where: {
          user_id: payload.user_id,
        },
      }),
    });
  }
}
