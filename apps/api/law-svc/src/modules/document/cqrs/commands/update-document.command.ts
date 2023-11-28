import { UpdateDocumentEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateDocumentEvent)
export class UpdateDocumentCommandhandler
  implements ICommandHandler<UpdateDocumentEvent>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: UpdateDocumentEvent) {
    return await this.dataService.$transaction([
      this.dataService.document.update({
        where: {
          id: payload.id,
        },
        data: payload.document,
      }),
    ]);
  }
}
