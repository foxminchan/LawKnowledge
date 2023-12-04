import {
  CreateVectorCommand,
  DeleteVectorCommand,
  DeleteVectorFilterCommand,
} from './commands';
import { FilterDto } from './dto';
import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { DocumentFileType } from '@law-knowledge/shared';
import { RelevanceSearchQuery, SimilaritySearchQuery } from './queries';

@Controller()
export class EmbeddingController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @EventPattern({ cmd: 'updateEmbedding' })
  createVector(type: DocumentFileType) {
    return this.commandBus.execute(new CreateVectorCommand(type));
  }

  @EventPattern({ cmd: 'deleteEmbedding' })
  deleteVector(ids: string[]) {
    return this.commandBus.execute(new DeleteVectorCommand(ids));
  }

  @EventPattern({ cmd: 'deleteEmbeddingFilter' })
  deleteVectorFilter(filters: FilterDto) {
    return this.commandBus.execute(new DeleteVectorFilterCommand(filters));
  }

  @EventPattern({ cmd: 'similaritySearch' })
  similaritySearch(keyword: string, filters?: FilterDto) {
    return this.queryBus.execute(new SimilaritySearchQuery(keyword, filters));
  }

  @EventPattern({ cmd: 'relevanceSearch' })
  relevanceSearch(keyword: string) {
    return this.queryBus.execute(new RelevanceSearchQuery(keyword));
  }
}
