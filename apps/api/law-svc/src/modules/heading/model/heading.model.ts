import { AggregateRoot } from '@nestjs/cqrs';

export class Heading extends AggregateRoot {
  constructor(
    public id: string,
    public name: string,
    public no: number,
    public topic_id: string
  ) {
    super();
  }
}
