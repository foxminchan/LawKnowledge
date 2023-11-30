import { CreateDocumentEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateDocumentEvent)
export class CreateDocumentCommandHandler
  implements ICommandHandler<CreateDocumentEvent>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: CreateDocumentEvent) {
    return await this.dataService.$transaction([
      this.dataService.document.create({ data: payload.document }),
    ]);
  }
}
