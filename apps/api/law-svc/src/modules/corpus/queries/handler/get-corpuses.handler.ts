/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  LawDataService,
  constructQueryOptions,
} from '@law-knowledge/building-block';
import { GetCorpusesQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetCorpusesQuery)
export class GetCorpusesQueryHandler
  implements IQueryHandler<GetCorpusesQuery>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: GetCorpusesQuery) {
    return await this.dataService.codificationIndex.findMany({
      ...constructQueryOptions(payload.criteria),
      include: {
        CorpusIndex: true,
        TableForm: true,
      },
    });
  }
}
