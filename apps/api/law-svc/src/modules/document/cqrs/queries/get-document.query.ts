import { GetDocumentEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetDocumentEvent)
export class GetDocumentQueryHandler
  implements IQueryHandler<GetDocumentEvent>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: GetDocumentEvent) {
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
