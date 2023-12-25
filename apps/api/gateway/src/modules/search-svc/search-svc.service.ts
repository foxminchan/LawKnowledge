/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Inject, OnModuleInit } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { SearchRequest, SearchSvc } from './search-svc.interface';

export class SearchService implements OnModuleInit {
  private searchSvcService: SearchSvc;

  constructor(@Inject('SEARCH_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.searchSvcService = this.client.getService<SearchSvc>('SearchService');
  }

  search(context: SearchRequest) {
    return this.searchSvcService.search(context).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  vectoring() {
    return this.searchSvcService.vectoring().pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
