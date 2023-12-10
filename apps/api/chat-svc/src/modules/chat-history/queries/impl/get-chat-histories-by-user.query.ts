import { IQuery } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/building-block';

export class GetChatHistoriesByUserQuery implements IQuery {
  constructor(
    public readonly user_id: string,
    public readonly criteria?: Criteria,
  ) {}
}
