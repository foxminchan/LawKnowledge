import { GetHeadingQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

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
