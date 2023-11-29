import { CreateTopicEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateTopicEvent)
export class CreateTopicCommandHandler
  implements ICommandHandler<CreateTopicEvent>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(event: CreateTopicEvent) {
    return this.dataService.$transaction([
      this.dataService.topic.create({ data: event.topic }),
    ]);
  }
}
