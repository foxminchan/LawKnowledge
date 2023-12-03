import { AggregateRoot } from '@nestjs/cqrs';

export class Document extends AggregateRoot {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly indexing: string,
    public readonly mpc: string,
    public readonly heading_id: string
  ) {
    super();
  }
}
