import { Module } from '@nestjs/common';
import { SearchController } from './search-svc.controller';

@Module({
  controllers: [SearchController],
})
export class SearchSvcModule {}
