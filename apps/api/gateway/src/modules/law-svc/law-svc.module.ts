/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { join } from 'path';
import { configs } from '../../configs';
import { Module } from '@nestjs/common';
import { TopicController, TopicService } from './topic';
import { CorpusController, CorpusService } from './corpus';
import { HeadingController, HeadingService } from './heading';
import { KeywordService, KeywordController } from './keyword';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DocumentController, DocumentService } from './document';
import { TableFormController, TableFormService } from './tableform';
import { CodificationController, CodificationService } from './codification';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'LAW_SERVICE',
        transport: Transport.GRPC,
        options: {
          url: `${configs().lawSvcHost}:${configs().lawSvcPort}`,
          package: 'law',
          protoPath: join(__dirname, './proto/law-svc/law-svc.proto'),
          loader: {
            enums: String,
            objects: true,
            arrays: true,
            includeDirs: [join(__dirname, './proto/law-svc')],
          },
        },
      },
    ]),
  ],
  controllers: [
    TopicController,
    CorpusController,
    HeadingController,
    KeywordController,
    DocumentController,
    TableFormController,
    CodificationController,
  ],
  providers: [
    TopicService,
    CorpusService,
    HeadingService,
    KeywordService,
    DocumentService,
    TableFormService,
    CodificationService,
  ],
})
export class LawSvcModule {}
