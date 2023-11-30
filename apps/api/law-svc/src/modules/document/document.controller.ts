import {
  GetDocumentEvent,
  GetDocumentsEvent,
  CreateDocumentEvent,
  DeleteDocumentEvent,
  UpdateDocumentEvent,
} from './cqrs';
import { Controller } from '@nestjs/common';
import { Criteria } from '@law-knowledge/shared';
import { CreateDocumentModel } from '../../models';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class DocumentController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @EventPattern({ cmd: 'getDocuments' })
  getDocuments(criteria?: Criteria) {
    return this.queryBus.execute(new GetDocumentsEvent(criteria));
  }

  @EventPattern({ cmd: 'getDocument' })
  getDocument(id: string) {
    return this.queryBus.execute(new GetDocumentEvent(id));
  }

  @EventPattern({ cmd: 'deleteDocument' })
  deleteDocument(id: string) {
    return this.commandBus.execute(new DeleteDocumentEvent(id));
  }

  @EventPattern({ cmd: 'createDocument' })
  createDocument(payload: CreateDocumentModel) {
    return this.commandBus.execute(new CreateDocumentEvent(payload));
  }

  @EventPattern({ cmd: 'updateDocument' })
  updateDocument(id: string, payload: CreateDocumentModel) {
    return this.commandBus.execute(new UpdateDocumentEvent(id, payload));
  }
}
