import { ICommand } from '@nestjs/cqrs';
import { CreateDocumentDto } from '../../dto';

export class CreateDocumentCommand implements ICommand {
  constructor(public readonly document: CreateDocumentDto) {}
}
