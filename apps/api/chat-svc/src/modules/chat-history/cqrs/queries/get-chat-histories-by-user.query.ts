import { ChatDataService } from '@law-knowledge/data';
import { GetChatHistoriesByUserEvent } from '../events';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetChatHistoriesByUserEvent)
export class GetChatHistoriesByUserQueryHandler
  implements IQueryHandler<GetChatHistoriesByUserEvent>
{
  constructor(public readonly dataService: ChatDataService) {}

  execute(payload: GetChatHistoriesByUserEvent) {
    return this.dataService.chatHistory.findMany({
      ...constructQueryOptions(payload.criteria, {
        where: {
          user_id: payload.user_id,
        },
      }),
    });
  }
}
