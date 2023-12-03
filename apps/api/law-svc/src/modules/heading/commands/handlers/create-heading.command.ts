import { CreateHeadingCommand } from '../impl';
import { LawDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateHeadingCommand)
export class CreateHeadingCommandHandler
  implements ICommandHandler<CreateHeadingCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: CreateHeadingCommand) {
    return this.dataService.$transaction([
      this.dataService.heading.create({ data: payload.heading }),
    ]);
  }
}
