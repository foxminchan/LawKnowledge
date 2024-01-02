/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateDocumentCommandHandler,
  DeleteDocumentCommandHandler,
  UpdateDocumentCommandHandler,
  SummarizeDocumentCommandHandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DocumentController } from './document.controller';
import { GetDocumentQueryHandler, GetDocumentsQueryHandler } from './queries';

const CommandHandlers = [
  CreateDocumentCommandHandler,
  UpdateDocumentCommandHandler,
  DeleteDocumentCommandHandler,
  SummarizeDocumentCommandHandler,
];

const QueryHandlers = [GetDocumentQueryHandler, GetDocumentsQueryHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...QueryHandlers],
  controllers: [DocumentController],
})
export class DocumentModule {}
