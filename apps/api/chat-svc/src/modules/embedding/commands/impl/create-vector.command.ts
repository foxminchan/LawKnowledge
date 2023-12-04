import { ICommand } from '@nestjs/cqrs';
import { DocumentFileType } from '@law-knowledge/shared';

export class CreateVectorCommand implements ICommand {
  constructor(public readonly docType: DocumentFileType) {}
}
