import { IQuery } from '@nestjs/cqrs';

export class RelevanceSearchQuery implements IQuery {
  constructor(public readonly keyword: string) {}
}
