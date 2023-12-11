import { UpdateUserCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthDataService } from '@law-knowledge/building-block';

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
