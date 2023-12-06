import { IQuery } from '@nestjs/cqrs';

export class SimilaritySearchQuery implements IQuery {
  constructor(
    public readonly keyword: string,
    public readonly filters?: number
  ) {}
}
