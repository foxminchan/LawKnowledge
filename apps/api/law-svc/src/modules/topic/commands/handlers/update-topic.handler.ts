import { UpdateTopicCommand } from '../impl';
import { LawDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateTopicCommand)
export class UpdateTopicCommandHandler
  implements ICommandHandler<UpdateTopicCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(event: UpdateTopicCommand) {
    return this.dataService.$transaction([
      this.dataService.document.update({
        where: { id: event.topic.id },
        data: event.topic,
      }),
    ]);
  }
}
