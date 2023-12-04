import { from, switchMap } from 'rxjs';
import weaviate from 'weaviate-ts-client';
import { RelevanceSearchQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { WeaviateStore } from 'langchain/vectorstores/weaviate';

@QueryHandler(RelevanceSearchQuery)
export class RelevanceSearchQueryHandler
  implements IQueryHandler<RelevanceSearchQuery>
{
  private storeConfig = {
    client: weaviate.client({
      scheme: process.env.WEAVIATE_SCHEME,
      host: process.env.WEAVIATE_HOST,
      apiKey: new weaviate.ApiKey(process.env.WEAVIATE_API_KEY || undefined),
    }),
    textKey: 'text',
    indexName: process.env.WEAVIATE_INDEX_NAME,
    metadataKeys: ['law', 'phapluat', 'vietnamlaw', 'vietlaw'],
  };

  async execute(payload: RelevanceSearchQuery) {
    return from(
      WeaviateStore.fromExistingIndex(new OpenAIEmbeddings(), {
        ...this.storeConfig,
      })
    ).pipe(
      switchMap((store) =>
        store.maxMarginalRelevanceSearch(payload.keyword, { k: 1 })
      )
    );
  }
}
