import { GetUsersQuery } from '../impl';
import { AuthDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetUsersQuery)
export class GetUsersQueryHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: GetUsersQuery) {
    return this.dataService.user.findMany({
      ...constructQueryOptions(payload.criteria),
    });
  }
}
