import { IQuery } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/building-block';

export class GetHeadingsQuery implements IQuery {
  constructor(public readonly criteria?: Criteria) {}
}
