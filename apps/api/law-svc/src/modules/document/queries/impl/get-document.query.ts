import { IQuery } from '@nestjs/cqrs';

export class GetDocumentQuery implements IQuery {
  constructor(public readonly id: string) {}
}
