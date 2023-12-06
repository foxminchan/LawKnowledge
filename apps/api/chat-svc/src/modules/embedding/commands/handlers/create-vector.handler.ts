import fs from 'fs';
import { Logger } from '@nestjs/common';
import { CreateVectorCommand } from '../impl';
import { DocumentFileType } from '@law-knowledge/shared';
import { FaissStore } from 'langchain/vectorstores/faiss';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { DocxLoader } from 'langchain/document_loaders/fs/docx';
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
    const source = {
      [DocumentFileType.PDF]: {
        path: '../../../assets/pdf',
        loader: PDFLoader,
      },
      [DocumentFileType.DOC]: {
        path: '../../../assets/doc',
        loader: DocxLoader,
      },
      [DocumentFileType.TXT]: {
        path: '../../../assets/txt',
        loader: TextLoader,
      },
    }[payload.docType];

    switch (payload.docType) {
      case DocumentFileType.TXT:
        this.createVector(source);
        break;
      case DocumentFileType.DOC:
        this.createVector(source);
        break;
      case DocumentFileType.PDF:
        this.createVector(source);
        break;

      default:
        throw new Error('Document type not supported.');
    }
  }

  private createVector(
    source:
      | { path: string; loader: typeof PDFLoader }
      | { path: string; loader: typeof DocxLoader }
      | { path: string; loader: typeof TextLoader }
  ) {
    return from(fs.readdirSync(source.path, 'utf-8'))
      .pipe(
        concatMap((document) => {
          return from(
            new source.loader(`${source.path}/${document}`).load()
          ).pipe(
            concatMap((text) => {
              return from(
                this.splitter.createDocuments(
                  text.flat().map((doc) => doc.pageContent)
                )
              )
                .pipe(
                  concatMap((splittedDocument) => {
                    return from(
                      FaissStore.fromDocuments(
                        splittedDocument,
                        new OpenAIEmbeddings()
                      )
                    );
                  })
                )
                .pipe(
                  concatMap((file) => {
                    return from(file.save('.'));
                  })
                );
            }),
            tap(() =>
              this.logger.log(`Document processed successfully: ${document}`)
            ),
            catchError((error) => {
              this.logger.error('Error processing document:', document, error);
              return of(null);
            })
          );
        }),
        finalize(() => this.logger.log('All documents processed successfully.'))
      )
      .subscribe();
  }
}
