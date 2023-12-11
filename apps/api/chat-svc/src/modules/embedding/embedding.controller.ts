import { Controller } from '@nestjs/common';
import { SimilaritySearchQuery } from './queries';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { DocumentFileType } from '@law-knowledge/building-block';
import { CreateVectorCommand, DeleteVectorCommand } from './commands';

@Controller()
export class EmbeddingController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @EventPattern({ cmd: 'addEmbedding' })
  createVector(type: DocumentFileType) {
    return this.commandBus.execute(new CreateVectorCommand(type));
  }

  @EventPattern({ cmd: 'deleteEmbedding' })
  deleteVector(ids: string[]) {
    return this.commandBus.execute(new DeleteVectorCommand(ids));
  }

  @EventPattern({ cmd: 'similaritySearch' })
  similaritySearch(keyword: string, filters?: number) {
    return this.queryBus.execute(new SimilaritySearchQuery(keyword, filters));
  }
}
