import { UpdateUserCommand } from '../impl';
import { AuthDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler
  implements ICommandHandler<UpdateUserCommand>
{
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: UpdateUserCommand) {
    return this.dataService.$transaction([
      this.dataService.user.update({
        where: { id: payload.user.id },
        data: payload.user,
      }),
    ]);
  }
}
