import { DeleteUserEvent } from '../events';
import { AuthDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteUserEvent)
export class DeleteUserCommandHandler
  implements ICommandHandler<DeleteUserEvent>
{
  constructor(private readonly dataService: AuthDataService) {}

  async execute(command: DeleteUserEvent) {
    return this.dataService.$transaction([
      this.dataService.user.delete({
        where: { id: command.id },
      }),
    ]);
  }
}
