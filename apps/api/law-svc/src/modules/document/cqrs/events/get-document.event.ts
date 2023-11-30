import { IEvent } from '@nestjs/cqrs';

export class GetDocumentEvent implements IEvent {
  constructor(public readonly id: string) {}
}
