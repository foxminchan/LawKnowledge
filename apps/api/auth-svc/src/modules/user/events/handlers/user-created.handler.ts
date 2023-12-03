import { UserCreatedEvent } from '../impl';
import { AuthDataService } from '@law-knowledge/data';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  constructor(private readonly dataService: AuthDataService) {}

  async handle(event: UserCreatedEvent) {
    return this.dataService.user.update({
      where: {
        id: event.id,
      },
      data: {
        UserRoles: {
          create: [
            {
              role_id: '538cca28-8e18-47e7-8b6f-63c5a5ba386a',
            },
          ],
        },
      },
    });
  }
}
