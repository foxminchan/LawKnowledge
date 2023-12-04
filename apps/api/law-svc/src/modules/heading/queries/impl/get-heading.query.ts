import { IQuery } from '@nestjs/cqrs';

export class GetHeadingQuery implements IQuery {
  constructor(public readonly id: string) {}
}
