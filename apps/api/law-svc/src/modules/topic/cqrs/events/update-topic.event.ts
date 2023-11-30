import { IEvent } from '@nestjs/cqrs';
import { UpdateTopicModel } from '../../../../models';

export class UpdateTopicEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly topic: UpdateTopicModel
  ) {}
}
