import { DeleteRoleCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthDataService } from '@law-knowledge/building-block';

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
