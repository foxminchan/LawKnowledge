import {
  CreateVectorCommandHandler,
  DeleteVectorCommandHandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SimilaritySearchQueryHandler } from './queries';
import { EmbeddingController } from './embedding.controller';

const CommandHandlers = [
  CreateVectorCommandHandler,
  DeleteVectorCommandHandler,
];

const QueryHandlers = [SimilaritySearchQueryHandler];

@Module({
  imports: [CqrsModule],
  controllers: [EmbeddingController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class EmbeddingModule {}
