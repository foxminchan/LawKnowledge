import { IEvent } from '@nestjs/cqrs';

export class DocumentConstract implements IEvent {
  id: string;
  name: string;
  indexing: string;
  mpc: string;
  topicId: string;
  headingId: string;

  constructor(partial?: Partial<DocumentConstract>) {
    Object.assign(this, partial);
  }
}
