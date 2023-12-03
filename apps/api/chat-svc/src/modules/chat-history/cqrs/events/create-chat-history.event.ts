import { IEvent } from '@nestjs/cqrs';
import { CreateChatHistoryModel } from '../../../../models';

export class CreateChatHistoryEvent implements IEvent {
  constructor(public readonly chat: CreateChatHistoryModel) {}
}
