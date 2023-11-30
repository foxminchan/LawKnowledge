import { IEvent } from '@nestjs/cqrs';
import { CreateTopicModel } from '../../../../models';

export class CreateTopicEvent implements IEvent {
  constructor(public readonly topic: CreateTopicModel) {}
}
