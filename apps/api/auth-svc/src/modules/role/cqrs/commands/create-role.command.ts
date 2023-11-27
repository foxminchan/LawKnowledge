import { CreateRoleEvent } from '../events';
import { DataService } from '@law-knowledge/framework';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateRoleEvent)
export class CreateRoleCommandHandler
  implements ICommandHandler<CreateRoleEvent>
{
  constructor(public readonly dataService: DataService) {}

  async execute(payload: CreateRoleEvent) {
    return this.dataService.$transaction([
      this.dataService.roles.create({
        data: payload.role,
      }),
    ]);
  }
}
