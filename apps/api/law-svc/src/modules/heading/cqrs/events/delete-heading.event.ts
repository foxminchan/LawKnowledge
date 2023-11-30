import { IEvent } from '@nestjs/cqrs';

export class DeleteHeadingEvent implements IEvent {
  constructor(public readonly id: string) {}
}
