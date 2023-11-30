import { IEvent } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/shared';

export class GetHeadingsEvent implements IEvent {
  constructor(public readonly criteria?: Criteria) {}
}
