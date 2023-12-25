/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { join } from 'path';
import { Module } from '@nestjs/common';
import { configs } from '../../configs';
import { SearchService } from './search-svc.service';
import { SearchController } from './search-svc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SEARCH_SERVICE',
        transport: Transport.GRPC,
        options: {
          url: `${configs().searchSvcHost}:${configs().searchSvcPort}`,
          package: 'search',
          protoPath: join(__dirname, './proto/search-svc/search-svc.proto'),
          loader: {
            enums: String,
            objects: true,
            arrays: true,
            includeDirs: [join(__dirname, './proto/search-svc')],
          },
        },
      },
    ]),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchSvcModule {}
