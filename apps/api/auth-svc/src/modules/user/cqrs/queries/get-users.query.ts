import { GetUsersEvent } from '../events';
import { DataService } from '@law-knowledge/framework';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { constructQueryOptions } from '@law-knowledge/shared';

@QueryHandler(GetUsersEvent)
export class GetUsersQueryHandler implements IQueryHandler<GetUsersEvent> {
  constructor(private readonly dataService: DataService) {}

  async execute(payload: GetUsersEvent) {
    return this.dataService.user.findMany({
      ...constructQueryOptions(payload.criteria),
    });
  }
}
