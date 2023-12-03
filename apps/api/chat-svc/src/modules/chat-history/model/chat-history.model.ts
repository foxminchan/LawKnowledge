import { AggregateRoot } from '@nestjs/cqrs';

export class ChatHistory extends AggregateRoot {
  constructor(
    public readonly id: string,
    public readonly question: string,
    public readonly answer: string,
    public readonly date: string,
    public readonly user_id: string
  ) {
    super();
  }
}
