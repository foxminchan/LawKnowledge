import { GetDocumentsQuery } from '../impl';
import { LawDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetDocumentsQuery)
export class GetDocumentsQueryHandler
  implements IQueryHandler<GetDocumentsQuery>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: GetDocumentsQuery) {
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
