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
  CorpusResponse,
  CorpusCreatePayload,
  CorpusUpdatePayload,
} from './corpus.payload';
import { CorpusService } from './corpus.service';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@ApiController('corpus')
export class CorpusController {
  constructor(private readonly corpusSvcService: CorpusService) {}

  @Get(':id')
  @SwaggerResponse({
    operation: 'Get corpus',
    params: ['id'],
    response: CorpusResponse,
  })
  getCorpus(@Param('id') id: string) {
    return this.corpusSvcService.getCorpus(id);
  }

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get corpuses',
    response: CorpusResponse,
  })
  getCorpuses(@Query() criteria?: Criteria) {
    return this.corpusSvcService.getCorpuses(criteria);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create corpus',
    body: CorpusCreatePayload,
    response: CorpusResponse,
  })
  createCorpus(@Body() payload: CorpusCreatePayload) {
    return this.corpusSvcService.createCorpus(payload);
  }

  @Put()
  @SwaggerResponse({
    operation: 'Update corpus',
    body: CorpusUpdatePayload,
    response: CorpusResponse,
  })
  updateCorpus(@Body() payload: CorpusUpdatePayload) {
    return this.corpusSvcService.updateCorpus(payload);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete corpus',
    params: ['id'],
    response: CorpusResponse,
  })
  deleteCorpus(@Param('id') id: string) {
    return this.corpusSvcService.deleteCorpus(id);
  }
}
