/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  TopicModule,
  HeadingModule,
  DocumentModule,
  CodificationModule,
} from './modules';
import { Module } from '@nestjs/common';
import { LawDataModule, LoggerModule } from '@law-knowledge/building-block';

@Module({
  imports: [
    TopicModule,
    LoggerModule,
    LawDataModule,
    HeadingModule,
    DocumentModule,
    CodificationModule,
  ],
})
export class AppModule {}
