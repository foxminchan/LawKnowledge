import { IQueryHandler } from '@nestjs/cqrs';
import { GetDocumentsEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';
import { constructQueryOptions } from '@law-knowledge/shared';

export class GetDocumentsQueryHandler
  implements IQueryHandler<GetDocumentsEvent>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: GetDocumentsEvent) {
    return this.dataService.document.findMany({
      ...constructQueryOptions(payload.criteria),
      include: {
        heading: {
          include: {
            topic: true,
          },
        },
      },
    });
  }
}
