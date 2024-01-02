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
  CodificationResponse,
  CodificationCreatePayload,
  CodificationUpdatePayload,
} from './codification.payload';
import { CodificationService } from './codification.service';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@ApiController('codification')
export class CodificationController {
  constructor(private readonly codificationSvcService: CodificationService) {}

  @Get(':id')
  @SwaggerResponse({
    operation: 'Get codification by id',
    params: ['id'],
    response: CodificationResponse,
  })
  getCodification(@Param('id') id: string) {
    return this.codificationSvcService.getCodification(id);
  }

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get codifications',
    response: CodificationResponse,
  })
  getCodifications(@Query() criteria?: Criteria) {
    return this.codificationSvcService.getCodifications(criteria);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create codification',
    body: CodificationCreatePayload,
    response: CodificationResponse,
  })
  createCodification(@Body() payload: CodificationCreatePayload) {
    return this.codificationSvcService.createCodification(payload);
  }

  @Put()
  @SwaggerResponse({
    operation: 'Update codification',
    body: CodificationUpdatePayload,
    response: CodificationResponse,
  })
  updateCodification(@Body() payload: CodificationUpdatePayload) {
    return this.codificationSvcService.updateCodification(payload);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete codification',
    params: ['id'],
    response: CodificationResponse,
  })
  deleteCodification(@Param('id') id: string) {
    return this.codificationSvcService.deleteCodification(id);
  }
}
