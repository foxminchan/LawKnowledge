import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateDocumentEvent } from '../../../document/cqrs';
import { LawDataService } from '@law-knowledge/data';

@CommandHandler(CreateDocumentEvent)
export class CreateHeadingCommandHandler
  implements ICommandHandler<CreateDocumentEvent>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: CreateDocumentEvent) {
    return this.dataService.$transaction([
      this.dataService.document.create({ data: payload.document }),
    ]);
  }
}
