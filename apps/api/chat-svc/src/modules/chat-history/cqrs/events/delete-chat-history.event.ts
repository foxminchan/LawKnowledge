import { IEvent } from '@nestjs/cqrs';

export class DeleteChatHistoryEvent implements IEvent {
  constructor(public readonly id: string) {}
}
