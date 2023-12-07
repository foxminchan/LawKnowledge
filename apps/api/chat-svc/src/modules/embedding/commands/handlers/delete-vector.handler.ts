import { DeleteVectorCommand } from '../impl';
import { FaissStore } from 'langchain/vectorstores/faiss';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

@CommandHandler(DeleteVectorCommand)
export class DeleteVectorCommandHandler
  implements ICommandHandler<DeleteVectorCommand>
{
  async execute(payload: DeleteVectorCommand) {
    return new FaissStore(new OpenAIEmbeddings(), {}).delete({
      ids: payload.ids,
    });
  }
}
