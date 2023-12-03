import { DeleteHeadingCommand } from '../impl';
import { LawDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteHeadingCommand)
export class DeleteHeadingCommandHandler
  implements ICommandHandler<DeleteHeadingCommand>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: DeleteHeadingCommand) {
    return this.dataService.$transaction([
      this.dataService.heading.delete({ where: { id: payload.id } }),
    ]);
  }
}
