import { CreateRoleEvent } from '../events';
import { AuthDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateRoleEvent)
export class CreateRoleCommandHandler
  implements ICommandHandler<CreateRoleEvent>
{
  constructor(public readonly dataService: AuthDataService) {}

  async execute(payload: CreateRoleEvent) {
    return this.dataService.$transaction([
      this.dataService.roles.create({
        data: payload.role,
      }),
    ]);
  }
}
