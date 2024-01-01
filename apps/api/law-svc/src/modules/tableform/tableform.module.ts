/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateTableFormCommandHandler,
  DeleteTableFormCommandHandler,
  UpdateTableFormCommandHandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TableFormController } from './tableform.controller';
import { GetTableFormQueryHandler, GetTableFormsQueryHandler } from './queries';

const CommandHandlers = [
  CreateTableFormCommandHandler,
  UpdateTableFormCommandHandler,
  DeleteTableFormCommandHandler,
];

const QueryHandlers = [GetTableFormQueryHandler, GetTableFormsQueryHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...QueryHandlers],
  controllers: [TableFormController],
})
export class TableFormModule {}
