import { IQuery } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/building-block';

export class GetTopicsQuery implements IQuery {
  constructor(public readonly criteria?: Criteria) {}
}
