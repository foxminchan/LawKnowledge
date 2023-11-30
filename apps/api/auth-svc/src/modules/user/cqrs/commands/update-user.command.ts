import { UpdateUserEvent } from '../events';
import { AuthDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateUserEvent)
export class UpdateUserCommandHandler
  implements ICommandHandler<UpdateUserEvent>
{
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: UpdateUserEvent) {
    return this.dataService.$transaction([
      this.dataService.user.update({
        where: { id: payload.id },
        data: payload.user,
      }),
    ]);
  }
}
