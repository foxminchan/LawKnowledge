import { Criteria } from '@law-knowledge/shared';

export class GetTopicsQuery {
  constructor(public readonly criteria?: Criteria) {}
}
