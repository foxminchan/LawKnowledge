import { GetHeadingQuery } from '../impl';
import { LawDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetHeadingQuery)
export class GetHeadingQueryHandler implements IQueryHandler<GetHeadingQuery> {
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: GetHeadingQuery) {
    return this.dataService.heading.findUnique({
      where: { id: payload.id },
      include: { topic: true },
    });
  }
}
