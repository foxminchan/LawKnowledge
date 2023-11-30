import { AuthDataService } from '@law-knowledge/data';
import { GetRolesEvent } from '../events/get-roles.event';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetRolesEvent)
export class GetRolesQueryHandler implements IQueryHandler<GetRolesEvent> {
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: GetRolesEvent) {
    return this.dataService.roles.findMany({
      ...constructQueryOptions(payload.criteria),
    });
  }
}
