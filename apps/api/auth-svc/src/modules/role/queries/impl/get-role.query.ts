import { IQuery } from '@nestjs/cqrs';

export class GetRoleQuery implements IQuery {
  constructor(public readonly id: string) {}
}
