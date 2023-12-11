import { IQuery } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/building-block';

export class GetDocumentsQuery implements IQuery {
  constructor(public readonly criteria?: Criteria) {}
}
