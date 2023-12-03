import { DeleteUserCommand } from '../impl';
import { AuthDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteUserCommand)
export class DeleteUserCommandHandler
  implements ICommandHandler<DeleteUserCommand>
{
  constructor(private readonly dataService: AuthDataService) {}

  async execute(command: DeleteUserCommand) {
    return this.dataService.$transaction([
      this.dataService.user.delete({
        where: { id: command.id },
      }),
    ]);
  }
}
