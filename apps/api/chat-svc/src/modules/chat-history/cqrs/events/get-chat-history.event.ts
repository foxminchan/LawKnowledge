import { IEvent } from '@nestjs/cqrs';

export class GetChatHistoryEvent implements IEvent {
  constructor(public readonly id: string) {}
}
