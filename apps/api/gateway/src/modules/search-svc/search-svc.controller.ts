/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  Key,
  ApiController,
  SwaggerResponse,
} from '@law-knowledge/building-block';
import { Get, Query } from '@nestjs/common';
import { SearchService } from './search-svc.service';
import { SearchRequest } from './search-svc.interface';

@ApiController('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Key()
  @Get()
  @SwaggerResponse({
    operation: 'Embedding documents',
  })
  vectoring() {
    return this.searchService.vectoring();
  }

  @Get('search')
  @SwaggerResponse({
    operation: 'Search documents',
    query: ['context'],
  })
  search(@Query('context') context: SearchRequest) {
    return this.searchService.search(context);
  }
}
