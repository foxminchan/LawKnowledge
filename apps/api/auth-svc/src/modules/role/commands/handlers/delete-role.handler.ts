import { DeleteRoleCommand } from '../impl';
import { AuthDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteRoleCommand)
export class DeleteRoleCommandHandler
  implements ICommandHandler<DeleteRoleCommand>
{
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: DeleteRoleCommand) {
    return this.dataService.$transaction([
      this.dataService.roles.delete({
        where: { id: payload.id },
      }),
    ]);
  }
}
