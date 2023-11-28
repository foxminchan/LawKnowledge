import { IEvent } from '@nestjs/cqrs';
import { CreateHeadingModel } from '../../../../models';

export class CreateHeadingEvent implements IEvent {
  constructor(public readonly heading: CreateHeadingModel) {}
}
