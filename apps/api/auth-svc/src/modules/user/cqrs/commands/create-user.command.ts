import { CreateUserEvent } from '../events';
import { DataService } from '@law-knowledge/framework';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateUserEvent)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserEvent>
{
  constructor(private readonly dataService: DataService) {}

  async execute(payload: CreateUserEvent) {
    return this.dataService.$transaction([
      this.dataService.user.create({
        data: payload.user,
      }),
    ]);
  }
}
