/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateCorpusCommand,
  DeleteCorpusCommand,
  UpdateCorpusCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCorpusDto, UpdateCorpusDto } from './dto';
import { Criteria } from '@law-knowledge/building-block';
import { GetCorpusQuery, GetCorpusesQuery } from './queries';

@Controller()
export class CorpusController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @GrpcMethod('CorpusService', 'GetCorpus')
  getCorpus(id: string) {
    return this.queryBus.execute(new GetCorpusQuery(id));
  }

  @GrpcMethod('CorpusService', 'GetCorpuses')
  getCorpuses(criteria?: Criteria) {
    return this.queryBus.execute(new GetCorpusesQuery(criteria));
  }

  @GrpcMethod('CorpusService', 'CreateCorpus')
  createCorpus(data: CreateCorpusDto) {
    return this.commandBus.execute(new CreateCorpusCommand(data));
  }

  @GrpcMethod('CorpusService', 'UpdateCorpus')
  updateCorpus(data: UpdateCorpusDto) {
    return this.commandBus.execute(new UpdateCorpusCommand(data));
  }

  @GrpcMethod('CorpusService', 'DeleteCorpus')
  deleteCorpus(id: string) {
    return this.commandBus.execute(new DeleteCorpusCommand(id));
  }
}
