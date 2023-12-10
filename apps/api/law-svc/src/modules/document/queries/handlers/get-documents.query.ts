import {
  LawDataService,
  constructQueryOptions,
} from '@law-knowledge/building-block';
import { GetDocumentsQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

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
