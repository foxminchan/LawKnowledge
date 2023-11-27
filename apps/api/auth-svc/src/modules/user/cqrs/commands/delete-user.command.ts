import { DeleteUserEvent } from '../events';
import { DataService } from '@law-knowledge/framework';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteUserEvent)
export class DeleteUserCommandHandler
  implements ICommandHandler<DeleteUserEvent>
{
  constructor(private readonly dataService: DataService) {}

  async execute(command: DeleteUserEvent) {
    return this.dataService.$transaction([
      this.dataService.user.delete({
        where: { id: command.id },
      }),
    ]);
  }
}
