import { UpdateRoleCommand } from '../impl';
import { AuthDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateRoleCommand)
export class UpdateRoleCommandHandler
  implements ICommandHandler<UpdateRoleCommand>
{
  constructor(public readonly dataService: AuthDataService) {}

  async execute(payload: UpdateRoleCommand) {
    return this.dataService.$transaction([
      this.dataService.roles.update({
        where: { id: payload.role.id },
        data: payload.role,
      }),
    ]);
  }
}
