/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  LawDataService,
  constructQueryOptions,
} from '@law-knowledge/building-block';
import { GetKeywordsQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetKeywordsQuery)
export class GetKeywordsQueryHandler
  implements IQueryHandler<GetKeywordsQuery>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: GetKeywordsQuery) {
    return await this.dataService.keyword.findMany({
      ...constructQueryOptions(payload.criteria),
      include: {
        condification: true,
      },
    });
  }
}
