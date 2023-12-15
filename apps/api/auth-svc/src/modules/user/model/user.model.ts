import { AggregateRoot } from '@nestjs/cqrs';

export class User extends AggregateRoot {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
    public card: string,
    public address: string,
    public password: string,
  ) {
    super();
  }
}
