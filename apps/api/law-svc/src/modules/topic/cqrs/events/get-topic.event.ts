import { IEvent } from '@nestjs/cqrs';

export class GetTopicEvent implements IEvent {
  constructor(public readonly id: string) {}
}
