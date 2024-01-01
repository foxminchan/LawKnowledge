/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateKeywordCommand,
  DeleteKeywordCommand,
  UpdateKeywordCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/building-block';
import { CreateKeywordDto, UpdateKeywordDto } from './dto';
import { GetKeywordQuery, GetKeywordsQuery } from './queries';

@Controller()
export class KeywordController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @GrpcMethod('KeywordService', 'GetKeywords')
  getKeywords(criteria?: Criteria) {
    return this.queryBus.execute(new GetKeywordsQuery(criteria));
  }

  @GrpcMethod('KeywordService', 'GetKeyword')
  getKeyword(id: string) {
    return this.queryBus.execute(new GetKeywordQuery(id));
  }

  @GrpcMethod('KeywordService', 'CreateKeyword')
  createKeyword(data: CreateKeywordDto) {
    return this.commandBus.execute(new CreateKeywordCommand(data));
  }

  @GrpcMethod('KeywordService', 'UpdateKeyword')
  updateKeyword(data: UpdateKeywordDto) {
    return this.commandBus.execute(new UpdateKeywordCommand(data));
  }

  @GrpcMethod('KeywordService', 'DeleteKeyword')
  deleteKeyword(id: string) {
    return this.commandBus.execute(new DeleteKeywordCommand(id));
  }
}
