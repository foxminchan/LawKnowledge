import { AggregateRoot } from '@nestjs/cqrs';

export class Role extends AggregateRoot {
  constructor(public readonly id: string, public readonly name: string) {
    super();
  }
}
