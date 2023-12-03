import { GetHeadingsQuery } from '../impl';
import { LawDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetHeadingsQuery)
export class GetHeadingsQueryHandler
  implements IQueryHandler<GetHeadingsQuery>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: GetHeadingsQuery) {
    return this.dataService.heading.findMany({
      ...constructQueryOptions(payload.criteria),
      include: { topic: true },
    });
  }
}
