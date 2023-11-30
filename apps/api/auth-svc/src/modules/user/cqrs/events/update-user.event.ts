import { IEvent } from '@nestjs/cqrs';
import { UpdateUserModel } from '../../../../models';

export class UpdateUserEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly user: UpdateUserModel
  ) {}
}
