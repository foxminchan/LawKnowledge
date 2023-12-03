import { GetDocumentQuery } from '../impl';
import { LawDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetDocumentQuery)
export class GetDocumentQueryHandler
  implements IQueryHandler<GetDocumentQuery>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: GetDocumentQuery) {
    return this.dataService.document.findUnique({
      where: {
        id: payload.id,
      },
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
