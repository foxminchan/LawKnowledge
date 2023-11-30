import { IEvent } from '@nestjs/cqrs';

export class DeleteDocumentEvent implements IEvent {
  constructor(public readonly id: string) {}
}
