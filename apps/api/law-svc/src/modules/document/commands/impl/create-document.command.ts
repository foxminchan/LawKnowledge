import { CreateDocumentDto } from '../../dto';

export class CreateDocumentCommand {
  constructor(public readonly document: CreateDocumentDto) {}
}
