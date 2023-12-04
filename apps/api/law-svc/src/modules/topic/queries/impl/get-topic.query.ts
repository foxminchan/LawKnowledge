import { IQuery } from '@nestjs/cqrs';

export class GetTopicQuery implements IQuery {
  constructor(public readonly id: string) {}
}
