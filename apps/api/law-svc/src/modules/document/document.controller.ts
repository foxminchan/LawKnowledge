import {
  CreateDocumentCommand,
  DeleteDocumentCommand,
  UpdateDocumentCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { Criteria } from '@law-knowledge/shared';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { CreateDocumentDto, UpdateDocumentDto } from './dto';
import { GetDocumentQuery, GetDocumentsQuery } from './queries';

@Controller()
export class DocumentController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @EventPattern({ cmd: 'getDocuments' })
  getDocuments(criteria?: Criteria) {
    return this.queryBus.execute(new GetDocumentsQuery(criteria));
  }

  @EventPattern({ cmd: 'getDocument' })
  getDocument(id: string) {
    return this.queryBus.execute(new GetDocumentQuery(id));
  }

  @EventPattern({ cmd: 'deleteDocument' })
  deleteDocument(id: string) {
    return this.commandBus.execute(new DeleteDocumentCommand(id));
  }

  @EventPattern({ cmd: 'createDocument' })
  createDocument(payload: CreateDocumentDto) {
    return this.commandBus.execute(new CreateDocumentCommand(payload));
  }

  @EventPattern({ cmd: 'updateDocument' })
  updateDocument(payload: UpdateDocumentDto) {
    return this.commandBus.execute(new UpdateDocumentCommand(payload));
  }
}
