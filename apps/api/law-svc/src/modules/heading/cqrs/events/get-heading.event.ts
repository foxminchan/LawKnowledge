import { IEvent } from '@nestjs/cqrs';

export class GetHeadingEvent implements IEvent {
  constructor(public readonly id: string) {}
}
