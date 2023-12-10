import { User } from '../../model';
import { CreateUserCommand } from '../impl';
import { CryptoUtils, AuthDataService } from '@law-knowledge/building-block';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private readonly dataService: AuthDataService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(payload: CreateUserCommand) {
    const userCreated = await this.dataService.$transaction(async () =>
      this.dataService.user.create({
        data: {
          ...payload.user,
          password: await CryptoUtils.hashString(payload.user.password),
        },
      }),
    );

    const { id, name, email, phone, card, address, password } = userCreated;

    const userWithContext = this.publisher.mergeObjectContext(
      new User(id, name, email, phone, card, address, password),
    );

    userWithContext.createUser();
    userWithContext.commit();
  }
}
