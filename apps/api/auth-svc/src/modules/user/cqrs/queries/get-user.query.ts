import { GetUserEvent } from '../events';
import { AuthDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetUserEvent)
export class GetUserQueryHandler implements IQueryHandler<GetUserEvent> {
  constructor(private readonly dataService: AuthDataService) {}

  public async execute(payload: GetUserEvent) {
    return this.dataService.user.findUnique({
      where: {
        email: payload.email,
      },
    });
  }
}
