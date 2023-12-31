/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateDocumentCommandHandler,
  DeleteDocumentCommandHandler,
  UpdateDocumentCommandhandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DocumentController } from './document.controller';
import { GetDocumentQueryHandler, GetDocumentsQueryHandler } from './queries';

const CommandHandlers = [
  CreateDocumentCommandHandler,
  UpdateDocumentCommandhandler,
  DeleteDocumentCommandHandler,
];

const QueryHandlers = [GetDocumentQueryHandler, GetDocumentsQueryHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...QueryHandlers],
  controllers: [DocumentController],
})
export class DocumentModule {}
