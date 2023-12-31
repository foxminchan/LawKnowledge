import {
  CreateDocumentCommand,
  DeleteDocumentCommand,
  UpdateDocumentCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/building-block';
import { CreateDocumentDto, UpdateDocumentDto } from './dto';
import { GetDocumentQuery, GetDocumentsQuery } from './queries';

@Controller()
export class DocumentController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @GrpcMethod('LawService', 'GetDocuments')
  getDocuments(criteria?: Criteria) {
    return this.queryBus.execute(new GetDocumentsQuery(criteria));
  }

  @GrpcMethod('LawService', 'GetDocument')
  getDocument(id: string) {
    return this.queryBus.execute(new GetDocumentQuery(id));
  }

  @GrpcMethod('LawService', 'DeleteDocument')
  deleteDocument(id: string) {
    return this.commandBus.execute(new DeleteDocumentCommand(id));
  }

  @GrpcMethod('LawService', 'CreateDocument')
  createDocument(payload: CreateDocumentDto) {
    return this.commandBus.execute(new CreateDocumentCommand(payload));
  }

  @GrpcMethod('LawService', 'UpdateDocument')
  updateDocument(payload: UpdateDocumentDto) {
    return this.commandBus.execute(new UpdateDocumentCommand(payload));
  }
}
