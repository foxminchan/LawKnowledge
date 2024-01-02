/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  StuffDocumentsChain,
  RefineDocumentsChain,
  loadSummarizationChain,
  MapReduceDocumentsChain,
} from 'langchain/chains';
import { SummarizeDocumentCommand } from '../impl';
import { PromptTemplate } from 'langchain/prompts';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { TokenTextSplitter } from 'langchain/text_splitter';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SummarizeDocumentCommand)
export class SummarizeDocumentCommandHandler
  implements ICommandHandler<SummarizeDocumentCommand>
{
  private readonly llm: ChatOpenAI;
  private readonly summarizeChain:
    | StuffDocumentsChain
    | MapReduceDocumentsChain
    | RefineDocumentsChain;

  constructor() {
    this.llm = new ChatOpenAI({ temperature: 0.9, modelName: 'gpt-4' });
    this.summarizeChain = this.initializeSummarizationChain();
  }

  private initializeSummarizationChain() {
    const summaryTemplate = `
      Bạn là một luật sư, bạn đang đọc một văn bản pháp luật.
      Bạn cần tóm tắt nội dung của văn bản này.
      Dưới đây là tóm tắt của văn bản này:
      ---
      {content}
      ---
      Đầu ra sẽ là các phần tóm tắt của nội dung của văn bản pháp luật được cung cấp.
    `;
    const SUMMARY_PROMPT = PromptTemplate.fromTemplate(summaryTemplate);
    return loadSummarizationChain(this.llm, {
      type: 'refine',
      verbose: true,
      questionPrompt: SUMMARY_PROMPT,
    });
  }

  async execute(command: SummarizeDocumentCommand) {
    const splitter = new TokenTextSplitter({
      chunkSize: 10000,
      chunkOverlap: 250,
    });
    const docs = splitter.createDocuments([command.content]);
    return await this.summarizeChain.run(docs);
  }
}
