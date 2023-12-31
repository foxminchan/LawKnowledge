/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateCodificationCommandHandler,
  DeleteCodificationCommandHandler,
  UpdateCodificationCommandHandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CodificationController } from './codification.controller';
import { GetConditionQueryHandler, GetConditionsQueryHandler } from './queries';

const CommandHandlers = [
  CreateCodificationCommandHandler,
  DeleteCodificationCommandHandler,
  UpdateCodificationCommandHandler,
];

const QueryHandlers = [GetConditionQueryHandler, GetConditionsQueryHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...QueryHandlers],
  controllers: [CodificationController],
})
export class CodificationModule {}
