import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetRoleEvent } from '../events';
import { DataService } from '@law-knowledge/framework';

@QueryHandler(GetRoleEvent)
export class GetRoleQueryHandler implements IQueryHandler<GetRoleEvent> {
  constructor(private readonly dataService: DataService) {}

  async execute(query: GetRoleEvent) {
    return this.dataService.roles.findUnique({
      where: { id: query.id },
    });
  }
}
