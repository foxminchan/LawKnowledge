import { UserCreatedEvent } from '../impl';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AuthDataService } from '@law-knowledge/building-block';

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
