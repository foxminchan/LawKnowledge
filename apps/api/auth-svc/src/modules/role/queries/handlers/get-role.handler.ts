import { GetRoleQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AuthDataService } from '@law-knowledge/building-block';

@QueryHandler(GetRoleQuery)
export class GetRoleQueryHandler implements IQueryHandler<GetRoleQuery> {
  constructor(private readonly dataService: AuthDataService) {}

  async execute(query: GetRoleQuery) {
    return this.dataService.roles.findUnique({
      where: { id: query.id },
    });
  }
}
