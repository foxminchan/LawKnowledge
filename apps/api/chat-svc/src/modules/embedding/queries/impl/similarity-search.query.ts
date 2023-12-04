import { IQuery } from '@nestjs/cqrs';
import { FilterDto } from '../../dto';

export class SimilaritySearchQuery implements IQuery {
  constructor(
    public readonly keyword: string,
    public readonly filters?: FilterDto
  ) {}
}
