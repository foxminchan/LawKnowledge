import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetHeadingsEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetHeadingsEvent)
export class GetHeadingsQueryHandler implements IQueryHandler<GetHeadingsEvent> {
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: GetHeadingsEvent) {
    return this.dataService.heading.findMany({
      ...constructQueryOptions(payload.criteria),
      include: { topic: true },
    });
  }
}
