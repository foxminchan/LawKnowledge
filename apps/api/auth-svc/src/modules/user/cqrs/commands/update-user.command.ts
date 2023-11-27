import { UpdateUserEvent } from '../events';
import { DataService } from '@law-knowledge/framework';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateUserEvent)
export class UpdateUserCommandHandler
  implements ICommandHandler<UpdateUserEvent>
{
  constructor(private readonly dataService: DataService) {}

  async execute(payload: UpdateUserEvent) {
    return this.dataService.$transaction([
      this.dataService.user.update({
        where: { id: payload.id },
        data: payload.user,
      }),
    ]);
  }
}
