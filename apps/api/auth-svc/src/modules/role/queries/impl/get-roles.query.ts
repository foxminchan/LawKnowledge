import { Criteria } from '@law-knowledge/shared';

export class GetRolesQuery {
  constructor(public readonly criteria?: Criteria) {}
}
