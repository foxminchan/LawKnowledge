import { ICommand } from '@nestjs/cqrs';
import { UpdateDocumentDto } from '../../dto';

export class UpdateDocumentCommand implements ICommand {
  constructor(public readonly document: UpdateDocumentDto) {}
}
