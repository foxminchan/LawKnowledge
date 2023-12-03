import { IEvent } from '@nestjs/cqrs';
import { UpdateChatHistoryModel } from '../../../../models';

export class UpdateChatHistoryEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly chat: UpdateChatHistoryModel
  ) {}
}
