import { AggregateRoot } from '@nestjs/cqrs';

export class Role extends AggregateRoot {
  id: string;
  name: string;
}
