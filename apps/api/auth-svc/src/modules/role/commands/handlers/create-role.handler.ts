import { CreateRoleCommand } from '../impl';
import { AuthDataService } from '@law-knowledge/data';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateRoleCommand)
export class CreateRoleCommandHandler
  implements ICommandHandler<CreateRoleCommand>
{
  constructor(public readonly dataService: AuthDataService) {}

  async execute(payload: CreateRoleCommand) {
    return this.dataService.$transaction([
      this.dataService.roles.create({
        data: payload.role,
      }),
    ]);
  }
}
