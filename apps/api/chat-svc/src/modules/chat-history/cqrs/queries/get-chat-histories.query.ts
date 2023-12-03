import { GetChatHistoriesEvent } from '../events';
import { ChatDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetChatHistoriesEvent)
export class GetChatHistoriesQueryHandler
  implements IQueryHandler<GetChatHistoriesEvent>
{
  constructor(public readonly dataService: ChatDataService) {}

  execute(payload: GetChatHistoriesEvent) {
    return this.dataService.chatHistory.findMany({
      ...constructQueryOptions(payload.criteria),
    });
  }
}
