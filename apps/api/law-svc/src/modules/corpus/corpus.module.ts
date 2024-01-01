/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateCorpusCommandHandler,
  DeleteCorpusCommandHandler,
  UpdateCorpusCommandHandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CorpusController } from './corpus.controller';
import { GetCorpusQueryHandler, GetCorpusesQueryHandler } from './queries';

const CommandHandlers = [
  CreateCorpusCommandHandler,
  DeleteCorpusCommandHandler,
  UpdateCorpusCommandHandler,
];

const QueryHandlers = [GetCorpusQueryHandler, GetCorpusesQueryHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...QueryHandlers],
  controllers: [CorpusController],
})
export class CorpusModule {}
