import { GetTopicEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetTopicEvent)
export class GetTopicQueryHandler implements IQueryHandler<GetTopicEvent> {
  constructor(private readonly dataService: LawDataService) {}

  async execute(event: GetTopicEvent) {
    return this.dataService.topic.findUnique({
      where: {
        id: event.id,
      },
    });
  }
}
