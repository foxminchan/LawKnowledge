import { IQuery } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/shared';

export class GetChatHistoriesQuery implements IQuery {
  constructor(public readonly criteria?: Criteria) {}
}
