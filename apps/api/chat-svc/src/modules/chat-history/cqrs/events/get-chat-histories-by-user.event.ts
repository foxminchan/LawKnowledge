import { IEvent } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/shared';

export class GetChatHistoriesByUserEvent implements IEvent {
  constructor(
    public readonly user_id: string,
    public readonly criteria?: Criteria
  ) {}
}
