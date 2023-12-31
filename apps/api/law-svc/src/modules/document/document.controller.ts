/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

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

  @GrpcMethod('DocumentService', 'GetDocuments')
  getDocuments(criteria?: Criteria) {
    return this.queryBus.execute(new GetDocumentsQuery(criteria));
  }

  @GrpcMethod('DocumentService', 'GetDocument')
  getDocument(id: string) {
    return this.queryBus.execute(new GetDocumentQuery(id));
  }

  @GrpcMethod('DocumentService', 'DeleteDocument')
  deleteDocument(id: string) {
    return this.commandBus.execute(new DeleteDocumentCommand(id));
  }

  @GrpcMethod('DocumentService', 'CreateDocument')
  createDocument(payload: CreateDocumentDto) {
    return this.commandBus.execute(new CreateDocumentCommand(payload));
  }

  @GrpcMethod('DocumentService', 'UpdateDocument')
  updateDocument(payload: UpdateDocumentDto) {
    return this.commandBus.execute(new UpdateDocumentCommand(payload));
  }
}
