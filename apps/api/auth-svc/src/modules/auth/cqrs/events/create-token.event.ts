import { IEvent } from '@nestjs/cqrs';
import { LoginPayload } from '../../@types';

export class CreateTokenEvent implements IEvent {
  constructor(public readonly payload: LoginPayload) {}
}
