import { Criteria } from '@law-knowledge/shared';

export class GetChatHistoriesByUserQuery {
  constructor(
    public readonly user_id: string,
    public readonly criteria?: Criteria
  ) {}
}
