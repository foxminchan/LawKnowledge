import { from, switchMap } from 'rxjs';
import weaviate from 'weaviate-ts-client';
import { DeleteVectorFilterCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { WeaviateStore } from 'langchain/vectorstores/weaviate';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

@CommandHandler(DeleteVectorFilterCommand)
export class DeleteVectorFilterCommandHandler
  implements ICommandHandler<DeleteVectorFilterCommand>
{
  private storeConfig = {
    client: weaviate.client({
      scheme: process.env.WEAVIATE_SCHEME,
      host: process.env.WEAVIATE_HOST,
      apiKey: new weaviate.ApiKey(process.env.WEAVIATE_API_KEY || undefined),
    }),
    textKey: 'text',
    indexName: process.env.WEAVIATE_INDEX_NAME,
    metadataKeys: ['law', 'administrative', 'jurisprudence', 'government'],
  };

  async execute(payload: DeleteVectorFilterCommand) {
    return from(
      WeaviateStore.fromExistingIndex(new OpenAIEmbeddings(), {
        ...this.storeConfig,
      })
    ).pipe(
      switchMap((store) => {
        return store.delete({
          filter: {
            where: {
              ...payload.filters,
            },
          },
        });
      })
    );
  }
}
