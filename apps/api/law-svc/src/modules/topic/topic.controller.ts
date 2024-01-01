/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  CreateTopicCommand,
  DeleteTopicCommand,
  UpdateTopicCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTopicDto, UpdateTopicDto } from './dto';
import { Criteria } from '@law-knowledge/building-block';
import { GetTopicQuery, GetTopicsQuery } from './queries';

@Controller()
export class TopicController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @GrpcMethod('TopicService', 'CreateTopic')
  createTopic(data: CreateTopicDto) {
    return this.commandBus.execute(new CreateTopicCommand(data));
  }

  @GrpcMethod('TopicService', 'UpdateTopic')
  updateTopic(id: string, data: UpdateTopicDto) {
    return this.commandBus.execute(new UpdateTopicCommand(data));
  }

  @GrpcMethod('TopicService', 'DeleteTopic')
  deleteTopic(id: string) {
    return this.commandBus.execute(new DeleteTopicCommand(id));
  }

  @GrpcMethod('TopicService', 'GetTopics')
  getTopics(criteria?: Criteria) {
    return this.queryBus.execute(new GetTopicsQuery(criteria));
  }

  @GrpcMethod('TopicService', 'GetTopic')
  getTopic(id: string) {
    return this.queryBus.execute(new GetTopicQuery(id));
  }
}
