import { IQuery } from '@nestjs/cqrs';

export class QuestionAnsweringQuery implements IQuery {
  constructor(public readonly context: string) {}
}
