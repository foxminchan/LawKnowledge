/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateTopicCommandHandler,
  DeleteTopicCommandHandler,
  UpdateTopicCommandHandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TopicController } from './topic.controller';
import { GetTopicQueryHandler, GetTopicsQueryHandler } from './queries';

const CommandHandlers = [
  CreateTopicCommandHandler,
  DeleteTopicCommandHandler,
  UpdateTopicCommandHandler,
];

const QueryHandlers = [GetTopicQueryHandler, GetTopicsQueryHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...QueryHandlers],
  controllers: [TopicController],
})
export class TopicModule {}
