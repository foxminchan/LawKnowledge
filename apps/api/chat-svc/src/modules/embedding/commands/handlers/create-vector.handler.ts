import fs from 'fs';
import { Logger } from '@nestjs/common';
import { CreateVectorCommand } from '../impl';
import { FaissStore } from 'langchain/vectorstores/faiss';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { catchError, concatMap, finalize, from, of, tap } from 'rxjs';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

@CommandHandler(CreateVectorCommand)
export class CreateVectorCommandHandler
  implements ICommandHandler<CreateVectorCommand>
{
  private logger = new Logger(CreateVectorCommandHandler.name);
  private splitter: RecursiveCharacterTextSplitter;

  constructor() {
    this.splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 0,
    });
  }

  async execute(payload: CreateVectorCommand) {
    return from(fs.readdirSync(payload.path, 'utf-8'))
      .pipe(
        concatMap((document) => {
          return from(new TextLoader(payload.path).load()).pipe(
            concatMap((text) => {
              return from(
                this.splitter.createDocuments(
                  text.flat().map((doc) => doc.pageContent),
                ),
              )
                .pipe(
                  concatMap((splittedDocument) => {
                    return from(
                      FaissStore.fromDocuments(
                        splittedDocument,
                        new OpenAIEmbeddings(),
                      ),
                    );
                  }),
                )
                .pipe(
                  concatMap((file) => {
                    return from(file.save('./apps/api/chat-svc'));
                  }),
                );
            }),
            tap(() =>
              this.logger.log(`Document processed successfully: ${document}`),
            ),
            catchError((error) => {
              this.logger.error(
                `Error processing document: ${document} ${error}`,
              );
              return of(null);
            }),
          );
        }),
        finalize(() =>
          this.logger.log('All documents processed successfully.'),
        ),
      )
      .subscribe();
  }
}
