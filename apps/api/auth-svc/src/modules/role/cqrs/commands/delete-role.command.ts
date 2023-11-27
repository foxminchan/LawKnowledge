import { DeleteRoleEvent } from '../events';
import { ICommandHandler } from '@nestjs/cqrs';
import { DataService } from '@law-knowledge/framework';

export class DeleteRoleCommandHandler
  implements ICommandHandler<DeleteRoleEvent>
{
  constructor(private readonly dataService: DataService) {}

  async execute(payload: DeleteRoleEvent) {
    return this.dataService.$transaction([
      this.dataService.roles.delete({
        where: { id: payload.id },
      }),
    ]);
  }
}
