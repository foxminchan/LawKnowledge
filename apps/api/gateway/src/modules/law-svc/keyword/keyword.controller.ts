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
  KeywordCreatePayload,
  KeywordResponse,
  KeywordUpdatePayload,
} from './keyword.payload';
import { KeywordService } from './keyword.service';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@ApiController('Keyword')
export class keywordController {
  constructor(private readonly KeywordSvcService: KeywordService) {}

  @Get(':id')
  @SwaggerResponse({
    operation: 'Get Keyword',
    params: ['id'],
    response: KeywordResponse,
  })
  getKeyword(@Param('id') id: string) {
    return this.KeywordSvcService.getKeyword(id);
  }

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get Keywords',
    response: KeywordResponse,
  })
  getKeywords(@Query() criteria?: Criteria) {
    return this.KeywordSvcService.getKeywords(criteria);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create Keyword',
    body: KeywordCreatePayload,
    response: KeywordResponse,
  })
  createKeyword(@Body() payload: KeywordCreatePayload) {
    return this.KeywordSvcService.createKeyword(payload);
  }

  @Put()
  @SwaggerResponse({
    operation: 'Update Keyword',
    body: KeywordUpdatePayload,
    response: KeywordResponse,
  })
  updateKeyword(@Body() payload: KeywordUpdatePayload) {
    return this.KeywordSvcService.updateKeyword(payload);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete Keyword',
    params: ['id'],
    response: KeywordResponse,
  })
  deleteKeyword(@Param('id') id: string) {
    return this.KeywordSvcService.deleteKeyword(id);
  }
}
