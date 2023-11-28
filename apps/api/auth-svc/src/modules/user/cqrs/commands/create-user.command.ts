import { CreateUserEvent } from '../events';
import { AuthDataService } from '@law-knowledge/data';
import { CryptoUtils } from '@law-knowledge/shared';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateUserEvent)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserEvent>
{
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: CreateUserEvent) {
    return this.dataService.$transaction([
      this.dataService.user.create({
        data: {
          ...payload.user,
          password: await CryptoUtils.hashString(payload.user.password),
          UserRoles: {
            create: [
              {
                role_id: '538cca28-8e18-47e7-8b6f-63c5a5ba386a',
              },
            ],
          },
        },
      }),
    ]);
  }
}
