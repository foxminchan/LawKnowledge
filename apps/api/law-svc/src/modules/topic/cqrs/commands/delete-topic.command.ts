import { DeleteTopicEvent } from '../events';
import { LawDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteTopicEvent)
export class DeleteTopicCommandHandler
  implements ICommandHandler<DeleteTopicEvent>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(event: DeleteTopicEvent) {
    return this.dataService.$transaction([
      this.dataService.topic.delete({
        where: { id: event.id },
      }),
    ]);
  }
}
