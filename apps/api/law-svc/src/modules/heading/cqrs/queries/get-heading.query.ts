import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetHeadingEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';

@QueryHandler(GetHeadingEvent)
export class GetHeadingQueryHandler implements IQueryHandler<GetHeadingEvent> {
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: GetHeadingEvent) {
    return this.dataService.heading.findUnique({
      where: { id: payload.id },
      include: { topic: true },
    });
  }
}
