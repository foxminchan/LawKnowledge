import { GetRoleEvent } from '../events';
import { AuthDataService } from '@law-knowledge/data';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetRoleEvent)
export class GetRoleQueryHandler implements IQueryHandler<GetRoleEvent> {
  constructor(private readonly dataService: AuthDataService) {}

  async execute(query: GetRoleEvent) {
    return this.dataService.roles.findUnique({
      where: { id: query.id },
    });
  }
}
