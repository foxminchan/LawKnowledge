import { UpdateRoleEvent } from '../events';
import { AuthDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateRoleEvent)
export class UpdateRoleCommandHandler
  implements ICommandHandler<UpdateRoleEvent>
{
  constructor(public readonly dataService: AuthDataService) {}

  async execute(payload: UpdateRoleEvent) {
    return this.dataService.$transaction([
      this.dataService.roles.update({
        where: { id: payload.id },
        data: payload.role,
      }),
    ]);
  }
}
