/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateTableFormCommand,
  DeleteTableFormCommand,
  UpdateTableFormCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Criteria } from '@law-knowledge/building-block';
import { CreateTableFormDto, UpdateTableFormDto } from './dto';
import { GetTableFormQuery, GetTableFormsQuery } from './queries';

@Controller()
export class TableFormController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @GrpcMethod('TableFormService', 'GetTableForm')
  getTableForm(id: string) {
    return this.queryBus.execute(new GetTableFormQuery(id));
  }

  @GrpcMethod('TableFormService', 'GetTableForms')
  getTableForms(criteria?: Criteria) {
    return this.queryBus.execute(new GetTableFormsQuery(criteria));
  }

  @GrpcMethod('TableFormService', 'CreateTableForm')
  createTableForm(data: CreateTableFormDto) {
    return this.commandBus.execute(new CreateTableFormCommand(data));
  }

  @GrpcMethod('TableFormService', 'UpdateTableForm')
  updateTableForm(data: UpdateTableFormDto) {
    return this.commandBus.execute(new UpdateTableFormCommand(data));
  }

  @GrpcMethod('TableFormService', 'DeleteTableForm')
  deleteTableForm(id: string) {
    return this.commandBus.execute(new DeleteTableFormCommand(id));
  }
}
