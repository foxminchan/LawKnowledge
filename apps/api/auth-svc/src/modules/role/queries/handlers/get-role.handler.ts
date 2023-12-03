import { GetRoleQuery } from '../impl';
import { AuthDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetRoleQuery)
export class GetRoleQueryHandler implements IQueryHandler<GetRoleQuery> {
  constructor(private readonly dataService: AuthDataService) {}

  async execute(query: GetRoleQuery) {
    return this.dataService.roles.findUnique({
      where: { id: query.id },
    });
  }
}
