import { UpdateRoleEvent } from '../events';
import { DataService } from '@law-knowledge/framework';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateRoleEvent)
export class UpdateRoleCommandHandler
  implements ICommandHandler<UpdateRoleEvent>
{
  constructor(public readonly dataService: DataService) {}

  async execute(payload: UpdateRoleEvent) {
    return this.dataService.$transaction([
      this.dataService.roles.update({
        where: { id: payload.id },
        data: payload.role,
      }),
    ]);
  }
}
