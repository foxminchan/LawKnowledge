/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  TopicModule,
  CorpusModule,
  HeadingModule,
  KeywordModule,
  DocumentModule,
  TableFormModule,
  CodificationModule,
} from './modules';
import { Module } from '@nestjs/common';
import { LawDataModule, LoggerModule } from '@law-knowledge/building-block';

@Module({
  imports: [
    TopicModule,
    LoggerModule,
    CorpusModule,
    LawDataModule,
    HeadingModule,
    KeywordModule,
    DocumentModule,
    TableFormModule,
    CodificationModule,
  ],
})
export class AppModule {}
