import { DeleteTopicCommand } from '../impl';
import { LawDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteTopicCommand)
export class DeleteTopicCommandHandler
  implements ICommandHandler<DeleteTopicCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(event: DeleteTopicCommand) {
    return this.dataService.$transaction([
      this.dataService.topic.delete({
        where: { id: event.id },
      }),
    ]);
  }
}
