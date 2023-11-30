import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateDocumentEvent } from '../../../document/cqrs';
import { LawDataService } from '@law-knowledge/data';

@CommandHandler(UpdateDocumentEvent)
export class UpdateTopicCommandHandler
  implements ICommandHandler<UpdateDocumentEvent>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(event: UpdateDocumentEvent) {
    return this.dataService.$transaction([
      this.dataService.document.update({
        where: { id: event.id },
        data: event.document,
      }),
    ]);
  }
}
