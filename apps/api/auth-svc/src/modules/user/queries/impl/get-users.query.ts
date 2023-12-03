import { Criteria } from '@law-knowledge/shared';

export class GetUsersQuery {
  constructor(public readonly criteria?: Criteria) {}
}
