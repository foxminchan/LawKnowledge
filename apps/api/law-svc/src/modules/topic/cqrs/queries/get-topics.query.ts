import { GetTopicsEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetTopicsEvent)
export class GetTopicsQueryHandler implements IQueryHandler<GetTopicsEvent> {
  constructor(private readonly dataService: LawDataService) {}

  async execute(event: GetTopicsEvent) {
    return this.dataService.topic.findMany({
      ...constructQueryOptions(event.criteria),
    });
  }
}
