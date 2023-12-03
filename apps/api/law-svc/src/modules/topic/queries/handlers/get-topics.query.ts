import { GetTopicsQuery } from '../impl';
import { LawDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetTopicsQuery)
export class GetTopicsQueryHandler implements IQueryHandler<GetTopicsQuery> {
  constructor(private readonly dataService: LawDataService) {}

  async execute(event: GetTopicsQuery) {
    return this.dataService.topic.findMany({
      ...constructQueryOptions(event.criteria),
    });
  }
}
