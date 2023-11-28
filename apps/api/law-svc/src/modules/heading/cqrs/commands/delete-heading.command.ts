import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteHeadingEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';

@CommandHandler(DeleteHeadingEvent)
export class DeleteHeadingCommandHandler
  implements ICommandHandler<DeleteHeadingEvent>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: DeleteHeadingEvent) {
    return this.dataService.$transaction([
      this.dataService.heading.delete({ where: { id: payload.id } }),
    ]);
  }
}
