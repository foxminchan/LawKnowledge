import { IEvent } from '@nestjs/cqrs';
import { CreateDocumentModel } from '../../../../models';

export class CreateDocumentEvent implements IEvent {
  constructor(public readonly document: CreateDocumentModel) {}
}
