import { UpdateHeadingCommand } from '../impl';
import { LawDataService } from '@law-knowledge/building-block';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateHeadingCommand)
export class UpdateHeadingCommandHandler
  implements ICommandHandler<UpdateHeadingCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: UpdateHeadingCommand) {
    return this.dataService.$transaction([
      this.dataService.heading.update({
        where: { id: payload.heading.id },
        data: payload.heading,
      }),
    ]);
  }
}
