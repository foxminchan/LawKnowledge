import { GetUserEvent } from '../events';
import { DataService } from '@law-knowledge/framework';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetUserEvent)
export class GetUserQueryHandler implements IQueryHandler<GetUserEvent> {
  constructor(private readonly dataService: DataService) {}

  public async execute(payload: GetUserEvent) {
    return this.dataService.user.findUnique({
      where: {
        email: payload.email,
      },
    });
  }
}
