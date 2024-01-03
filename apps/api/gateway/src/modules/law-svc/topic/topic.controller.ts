/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  Criteria,
  ApiController,
  SwaggerResponse,
  PagingSwaggerResponse,
} from '@law-knowledge/building-block';
import {
  TopicResponse,
  TopicCreatePayload,
  TopicUpdatePayload,
} from './topic.payload';
import { TopicService } from './topic.service';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@ApiController('topic')
export class TopicController {
  constructor(private readonly topicSvcService: TopicService) {}

  @Get(':id')
  @SwaggerResponse({
    operation: 'Get topic by id',
    params: ['id'],
    response: TopicResponse,
  })
  getTopic(@Param('id') id: string) {
    return this.topicSvcService.getTopic(id);
  }

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get topic',
    response: TopicResponse,
  })
  getTopics(@Query() criteria?: Criteria) {
    return this.topicSvcService.getTopics(criteria);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create topic',
    body: TopicCreatePayload,
    response: TopicResponse,
  })
  createTopic(@Body() payload: TopicCreatePayload) {
    return this.topicSvcService.createTopic(payload);
  }

  @Put()
  @SwaggerResponse({
    operation: 'Update topic',
    body: TopicUpdatePayload,
    response: TopicResponse,
  })
  updateTopic(@Body() payload: TopicUpdatePayload) {
    return this.topicSvcService.updateTopic(payload);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete topic',
    params: ['id'],
    response: TopicResponse,
  })
  deleteTopic(@Param('id') id: string) {
    return this.topicSvcService.deleteTopic(id);
  }
}
