import { DeleteDocumentEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteDocumentEvent)
export class DeleteDocumentCommandHandler
  implements ICommandHandler<DeleteDocumentEvent>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: DeleteDocumentEvent) {
    return this.dataService.$transaction([
      this.dataService.document.delete({
        where: {
          id: payload.id,
        },
      }),
    ]);
  }
}
