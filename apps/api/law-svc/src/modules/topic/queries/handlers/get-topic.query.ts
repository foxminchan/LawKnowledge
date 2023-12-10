import { GetTopicQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@QueryHandler(GetTopicQuery)
export class GetTopicQueryHandler implements IQueryHandler<GetTopicQuery> {
  constructor(private readonly dataService: LawDataService) {}

  async execute(event: GetTopicQuery) {
    return this.dataService.topic.findUnique({
      where: {
        id: event.id,
      },
    });
  }
}
