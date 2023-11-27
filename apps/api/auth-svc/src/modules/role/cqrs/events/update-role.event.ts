import { IEvent } from '@nestjs/cqrs';
import { UpdateRoleModel } from '../../../../models';

export class UpdateRoleEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly role: UpdateRoleModel
  ) {}
}
