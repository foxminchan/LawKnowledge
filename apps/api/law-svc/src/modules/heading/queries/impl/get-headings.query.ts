import { Criteria } from '@law-knowledge/shared';

export class GetHeadingsQuery {
  constructor(public readonly criteria?: Criteria) {}
}
