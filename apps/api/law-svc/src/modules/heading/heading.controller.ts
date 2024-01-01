/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateHeadingCommand,
  DeleteHeadingCommand,
  UpdateHeadingCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/building-block';
import { CreateHeadingDto, UpdateHeadingDto } from './dto';
import { GetHeadingQuery, GetHeadingsQuery } from './queries';

@Controller()
export class HeadingController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @GrpcMethod('HeadingService', 'GetHeadings')
  getHeadings(criteria?: Criteria) {
    return this.queryBus.execute(new GetHeadingsQuery(criteria));
  }

  @GrpcMethod('HeadingService', 'GetHeading')
  getHeading(id: string) {
    return this.queryBus.execute(new GetHeadingQuery(id));
  }

  @GrpcMethod('HeadingService', 'CreateHeading')
  createHeading(payload: CreateHeadingDto) {
    return this.commandBus.execute(new CreateHeadingCommand(payload));
  }

  @GrpcMethod('HeadingService', 'UpdateHeading')
  updateHeading(id: string, payload: UpdateHeadingDto) {
    return this.commandBus.execute(new UpdateHeadingCommand(payload));
  }

  @GrpcMethod('HeadingService', 'DeleteHeading')
  deleteHeading(id: string) {
    return this.commandBus.execute(new DeleteHeadingCommand(id));
  }
}
