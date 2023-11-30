import { IEvent } from '@nestjs/cqrs';
import { CreateUserModel } from '../../../../models';

export class CreateUserEvent implements IEvent {
  constructor(public readonly user: CreateUserModel) {}
}
