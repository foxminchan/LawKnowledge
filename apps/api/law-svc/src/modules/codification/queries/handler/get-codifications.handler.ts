/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  LawDataService,
  constructQueryOptions,
} from '@law-knowledge/building-block';
import { GetCodificationsQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetCodificationsQuery)
export class GetConditionsQueryHandler
  implements IQueryHandler<GetCodificationsQuery>
{
  constructor(private readonly dataService: LawDataService) {}
  async execute(payload: GetCodificationsQuery) {
    return await this.dataService.codificationIndex.findMany({
      ...constructQueryOptions(payload.criteria),
      include: {
        Document: true,
        CorpusIndex: true,
        Keyword: true,
        TableForm: true,
      },
    });
  }
}
