import { UpdateHeadingEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateHeadingEvent)
export class UpdateHeadingCommandHandler
  implements ICommandHandler<UpdateHeadingEvent>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: UpdateHeadingEvent) {
    return this.dataService.$transaction([
      this.dataService.heading.update({
        where: { id: payload.id },
        data: payload.heading,
      }),
    ]);
  }
}
