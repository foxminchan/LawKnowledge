import { SimilaritySearchQuery } from '../impl';
import { FaissStore } from 'langchain/vectorstores/faiss';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

@QueryHandler(SimilaritySearchQuery)
export class SimilaritySearchQueryHandler
  implements IQueryHandler<SimilaritySearchQuery>
{
  async execute(payload: SimilaritySearchQuery) {
    return await new FaissStore(new OpenAIEmbeddings(), {}).similaritySearch(
      payload.keyword,
      payload.filters
    );
  }
}
