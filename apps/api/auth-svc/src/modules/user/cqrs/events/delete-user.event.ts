import { IEvent } from '@nestjs/cqrs';

export class DeleteUserEvent implements IEvent {
  constructor(public readonly id: string) {}
}
