import { Get, OnModuleInit, Query } from '@nestjs/common';
import { SearchSvcOptions } from './search-svc.options';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { SearchingService } from './search-svc.interface';
import { ApiController, SwaggerResponse } from '@law-knowledge/shared';

@ApiController('search')
export class SearchController implements OnModuleInit {
  @Client(SearchSvcOptions)
  private readonly searchServiceClient: ClientGrpc;

  private searchService: SearchingService;

  onModuleInit() {
    this.searchService =
      this.searchServiceClient.getService<SearchingService>('SearchingService');
  }

  @Get()
  @SwaggerResponse({
    operation: 'Indexing documents',
  })
  indexing() {
    return this.searchService.RunIndexing('./datasets/*.txt');
  }

  @Get('search')
  @SwaggerResponse({
    operation: 'Search documents',
    query: ['keyword'],
  })
  search(@Query('keyword') keyword: string) {
    return this.searchService.search(keyword);
  }
}
