import { IEvent } from '@nestjs/cqrs';
import { UpdateDocumentModel } from '../../../../models';

export class UpdateHeadingEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly heading: UpdateDocumentModel
  ) {}
}
