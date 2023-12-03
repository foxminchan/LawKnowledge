import { GetRolesQuery } from '../impl';
import { AuthDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetRolesQuery)
export class GetRolesQueryHandler implements IQueryHandler<GetRolesQuery> {
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: GetRolesQuery) {
    return this.dataService.roles.findMany({
      ...constructQueryOptions(payload.criteria),
    });
  }
}
