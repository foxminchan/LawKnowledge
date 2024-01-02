/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  ContextPayload,
  DocumentResponse,
  DocumentCreatePayload,
  DocumentUpdatePayload,
} from './document.payload';
import {
  Criteria,
  ApiController,
  SwaggerResponse,
  PagingSwaggerResponse,
} from '@law-knowledge/building-block';
import { DocumentService } from './document.service';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@ApiController('document')
export class DocumentController {
  constructor(private readonly documentSvcService: DocumentService) {}

  @Get(':id')
  @SwaggerResponse({
    operation: 'Get document',
    params: ['id'],
    response: DocumentResponse,
  })
  getDocument(@Param('id') id: string) {
    return this.documentSvcService.getDocument(id);
  }

  @Get()
  @PagingSwaggerResponse({
    operation: 'Get documents',
    response: DocumentResponse,
  })
  getDocuments(@Query() criteria?: Criteria) {
    return this.documentSvcService.getDocuments(criteria);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create document',
    body: DocumentCreatePayload,
    response: DocumentResponse,
  })
  createDocument(@Body() payload: DocumentCreatePayload) {
    return this.documentSvcService.createDocument(payload);
  }

  @Post('summarize')
  @SwaggerResponse({
    operation: 'Summarize document',
    body: ContextPayload,
    response: DocumentResponse,
  })
  summarizeDocument(@Body() payload: ContextPayload) {
    return this.documentSvcService.summarizeDocument(payload.context);
  }

  @Put()
  @SwaggerResponse({
    operation: 'Update document',
    body: DocumentUpdatePayload,
    response: DocumentResponse,
  })
  updateDocument(@Body() payload: DocumentUpdatePayload) {
    return this.documentSvcService.updateDocument(payload);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete document',
    params: ['id'],
    response: DocumentResponse,
  })
  deleteDocument(@Param('id') id: string) {
    return this.documentSvcService.deleteDocument(id);
  }
}
