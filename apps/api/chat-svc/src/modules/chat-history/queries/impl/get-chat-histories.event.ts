import { Criteria } from '@law-knowledge/shared';

export class GetChatHistoriesQuery {
  constructor(public readonly criteria?: Criteria) {}
}
