import { CreateTopicCommand } from '../impl';
import { LawDataService } from '@law-knowledge/building-block';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateTopicCommand)
export class CreateTopicCommandHandler
  implements ICommandHandler<CreateTopicCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(event: CreateTopicCommand) {
    return this.dataService.$transaction([
      this.dataService.topic.create({ data: event.topic }),
    ]);
  }
}
