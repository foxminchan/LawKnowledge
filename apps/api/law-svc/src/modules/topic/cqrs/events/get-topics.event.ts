import { IEvent } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/shared';

export class GetTopicsEvent implements IEvent {
  constructor(public readonly criteria?: Criteria) {}
}
