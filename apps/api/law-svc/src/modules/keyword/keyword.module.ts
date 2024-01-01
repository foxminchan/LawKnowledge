/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateKeywordCommandHandler,
  DeleteKeywordCommandHandler,
  UpdateKeywordCommandHandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { KeywordController } from './keyword.controller';
import { GetKeywordQueryHandler, GetKeywordsQueryHandler } from './queries';

const CommandHandlers = [
  CreateKeywordCommandHandler,
  UpdateKeywordCommandHandler,
  DeleteKeywordCommandHandler,
];

const QueryHandlers = [GetKeywordQueryHandler, GetKeywordsQueryHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...QueryHandlers],
  controllers: [KeywordController],
})
export class KeywordModule {}
