import { AggregateRoot } from '@nestjs/cqrs';

export class Topic extends AggregateRoot {
  constructor(public id: string, public name: string, public no: number) {
    super();
  }
}
