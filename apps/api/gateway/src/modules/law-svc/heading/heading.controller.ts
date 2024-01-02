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
  HeadingResponse,
  HeadingCreatePayload,
  HeadingUpdatePayload,
} from './heading.payload';
import { HeadingService } from './heading.service';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@ApiController('heading')
export class HeadingController {
  constructor(private readonly HeadingSvcService: HeadingService) {}

  @Get(':id')
  @SwaggerResponse({
    operation: 'Get heading',
    params: ['id'],
    response: HeadingResponse,
  })
  getHeading(@Param('id') id: string) {
    return this.HeadingSvcService.getHeading(id);
  }

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get headings',
    response: HeadingResponse,
  })
  getHeadings(@Query() criteria?: Criteria) {
    return this.HeadingSvcService.getHeadings(criteria);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create heading',
    body: HeadingCreatePayload,
    response: HeadingResponse,
  })
  createHeading(@Body() payload: HeadingCreatePayload) {
    return this.HeadingSvcService.createHeading(payload);
  }

  @Put()
  @SwaggerResponse({
    operation: 'Update heading',
    body: HeadingUpdatePayload,
    response: HeadingResponse,
  })
  updateHeading(@Body() payload: HeadingUpdatePayload) {
    return this.HeadingSvcService.updateHeading(payload);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete heading',
    params: ['id'],
    response: HeadingResponse,
  })
  deleteHeading(@Param('id') id: string) {
    return this.HeadingSvcService.deleteHeading(id);
  }
}
