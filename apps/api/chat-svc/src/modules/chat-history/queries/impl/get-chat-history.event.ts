import { IQuery } from '@nestjs/cqrs';

export class GetChatHistoryQuery implements IQuery {
  constructor(public readonly id: string) {}
}
