import { IQuery } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/building-block';

export class GetUsersQuery implements IQuery {
  constructor(public readonly criteria?: Criteria) {}
}
