import { from, switchMap } from 'rxjs';
import weaviate from 'weaviate-ts-client';
import { DeleteVectorCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { WeaviateStore } from 'langchain/vectorstores/weaviate';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

@CommandHandler(DeleteVectorCommand)
export class DeleteVectorCommandHandler
  implements ICommandHandler<DeleteVectorCommand>
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

  async execute(payload: DeleteVectorCommand) {
    return from(
      WeaviateStore.fromExistingIndex(new OpenAIEmbeddings(), {
        ...this.storeConfig,
      })
    ).pipe(
      switchMap((store) => {
        return store.delete({ ids: payload.ids });
      })
    );
  }
}
