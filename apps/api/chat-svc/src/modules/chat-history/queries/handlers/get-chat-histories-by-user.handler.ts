import { GetChatHistoriesByUserQuery } from '../impl';
import { ChatDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

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
