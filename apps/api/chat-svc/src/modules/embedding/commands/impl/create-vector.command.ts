import { ICommand } from '@nestjs/cqrs';
import { DocumentFileType } from '@law-knowledge/building-block';

export class CreateVectorCommand implements ICommand {
  constructor(public readonly docType: DocumentFileType) {}
}
