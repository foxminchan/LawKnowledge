/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateCodificationCommand,
  DeleteCodificationCommand,
  UpdateCodificationCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/building-block';
import { CreateCodificationDto, UpdateCodificationDto } from './dto';
import { GetCodificationQuery, GetCodificationsQuery } from './queries';

@Controller()
export class CodificationController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @GrpcMethod('CodificationService', 'GetCodifications')
  getCodifications(criteria?: Criteria) {
    return this.queryBus.execute(new GetCodificationsQuery(criteria));
  }

  @GrpcMethod('CodificationService', 'GetCodification')
  getCodification(id: string) {
    return this.queryBus.execute(new GetCodificationQuery(id));
  }

  @GrpcMethod('CodificationService', 'CreateCodification')
  createCodification(data: CreateCodificationDto) {
    return this.commandBus.execute(new CreateCodificationCommand(data));
  }

  @GrpcMethod('CodificationService', 'UpdateCodification')
  updateCodification(data: UpdateCodificationDto) {
    return this.commandBus.execute(new UpdateCodificationCommand(data));
  }

  @GrpcMethod('CodificationService', 'DeleteCodification')
  deleteCodification(id: string) {
    return this.commandBus.execute(new DeleteCodificationCommand(id));
  }
}
