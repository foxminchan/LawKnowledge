import { ICommand } from '@nestjs/cqrs';

export class DeleteDocumentCommand implements ICommand {
  constructor(public readonly id: string) {}
}
