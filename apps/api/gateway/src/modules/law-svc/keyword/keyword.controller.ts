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
export class KeywordController {
  constructor(private readonly keywordSvcService: KeywordService) {}

  @Get(':id')
  @SwaggerResponse({
    operation: 'Get Keyword',
    params: ['id'],
    response: KeywordResponse,
  })
  getKeyword(@Param('id') id: string) {
    return this.keywordSvcService.getKeyword(id);
  }

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get Keywords',
    response: KeywordResponse,
  })
  getKeywords(@Query() criteria?: Criteria) {
    return this.keywordSvcService.getKeywords(criteria);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create Keyword',
    body: KeywordCreatePayload,
    response: KeywordResponse,
  })
  createKeyword(@Body() payload: KeywordCreatePayload) {
    return this.keywordSvcService.createKeyword(payload);
  }

  @Put()
  @SwaggerResponse({
    operation: 'Update Keyword',
    body: KeywordUpdatePayload,
    response: KeywordResponse,
  })
  updateKeyword(@Body() payload: KeywordUpdatePayload) {
    return this.keywordSvcService.updateKeyword(payload);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete Keyword',
    params: ['id'],
    response: KeywordResponse,
  })
  deleteKeyword(@Param('id') id: string) {
    return this.keywordSvcService.deleteKeyword(id);
  }
}
