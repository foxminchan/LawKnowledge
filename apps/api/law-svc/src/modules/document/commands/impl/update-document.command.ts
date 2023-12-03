import { UpdateDocumentDto } from '../../dto';

export class UpdateDocumentCommand {
  constructor(public readonly document: UpdateDocumentDto) {}
}
