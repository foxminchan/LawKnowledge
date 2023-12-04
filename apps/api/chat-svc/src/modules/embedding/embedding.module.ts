import {
  CreateVectorCommandHandler,
  DeleteVectorCommandHandler,
  DeleteVectorFilterCommandHandler,
} from './commands';
import {
  RelevanceSearchQueryHandler,
  SimilaritySearchQueryHandler,
} from './queries';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EmbeddingController } from './embedding.controller';

const CommandHandlers = [
  CreateVectorCommandHandler,
  DeleteVectorCommandHandler,
  DeleteVectorFilterCommandHandler,
];

const QueryHandlers = [
  RelevanceSearchQueryHandler,
  SimilaritySearchQueryHandler,
];

@Module({
  imports: [CqrsModule],
  controllers: [EmbeddingController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class EmbeddingModule {}
