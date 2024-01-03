/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  TableFormResponse,
  TableFormCreatePayload,
  TableFormUpdatePayload,
} from './tableform.payload';
import { TableFormService } from './tableform.service';
import {
  Criteria,
  ApiController,
  SwaggerResponse,
  PagingSwaggerResponse,
} from '@law-knowledge/building-block';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@ApiController('tableForm')
export class TableFormController {
  constructor(private readonly tableFormSvcService: TableFormService) {}

  @Get(':id')
  @SwaggerResponse({
    operation: 'Get table/form by id',
    params: ['id'],
    response: TableFormResponse,
  })
  getTableForm(@Param('id') id: string) {
    return this.tableFormSvcService.getTableForm(id);
  }

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get table/form',
    response: TableFormResponse,
  })
  getTableForms(@Query() criteria?: Criteria) {
    return this.tableFormSvcService.getTableForms(criteria);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create table/form',
    body: TableFormCreatePayload,
    response: TableFormResponse,
  })
  createTableForm(@Body() payload: TableFormCreatePayload) {
    return this.tableFormSvcService.createTableForm(payload);
  }

  @Put()
  @SwaggerResponse({
    operation: 'Update table/form',
    body: TableFormUpdatePayload,
    response: TableFormResponse,
  })
  updateTableForm(@Body() payload: TableFormUpdatePayload) {
    return this.tableFormSvcService.updateTableForm(payload);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete table/form',
    params: ['id'],
    response: TableFormResponse,
  })
  deleteTableForm(@Param('id') id: string) {
    return this.tableFormSvcService.deleteTableForm(id);
  }
}
