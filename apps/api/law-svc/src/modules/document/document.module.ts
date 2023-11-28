import {
  GetDocumentQueryHandler,
  GetDocumentsQueryHandler,
  CreateDocumentCommandHandler,
  DeleteDocumentCommandHandler,
  UpdateDocumentCommandhandler,
} from './cqrs';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DocumentController } from './document.controller';

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
