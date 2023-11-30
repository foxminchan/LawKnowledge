import { IEvent } from '@nestjs/cqrs';
import { CreateRoleModel } from '../../../../models';

export class CreateRoleEvent implements IEvent {
  constructor(public readonly role: CreateRoleModel) {}
}
