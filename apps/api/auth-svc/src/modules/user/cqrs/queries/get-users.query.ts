import { GetUsersEvent } from '../events';
import { AuthDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetUsersEvent)
export class GetUsersQueryHandler implements IQueryHandler<GetUsersEvent> {
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: GetUsersEvent) {
    return this.dataService.user.findMany({
      ...constructQueryOptions(payload.criteria),
    });
  }
}
