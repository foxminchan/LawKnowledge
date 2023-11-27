import { IEvent } from '@nestjs/cqrs';

export class GetRoleEvent implements IEvent {
  constructor(public readonly id: string) {}
}
