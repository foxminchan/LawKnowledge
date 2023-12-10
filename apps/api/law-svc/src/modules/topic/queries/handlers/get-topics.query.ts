import {
  LawDataService,
  constructQueryOptions,
} from '@law-knowledge/building-block';
import { GetTopicsQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetTopicsQuery)
export class GetTopicsQueryHandler implements IQueryHandler<GetTopicsQuery> {
  constructor(private readonly dataService: LawDataService) {}

  async execute(event: GetTopicsQuery) {
    return this.dataService.topic.findMany({
      ...constructQueryOptions(event.criteria),
    });
  }
}
