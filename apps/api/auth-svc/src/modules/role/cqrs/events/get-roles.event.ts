import { IEvent } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/shared';

export class GetRolesEvent implements IEvent {
  constructor(public readonly criteria?: Criteria) {}
}
