/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { GetCorpusQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@QueryHandler(GetCorpusQuery)
export class GetCorpusQueryHandler implements IQueryHandler<GetCorpusQuery> {
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: GetCorpusQuery) {
    return await this.dataService.codificationIndex.findUnique({
      where: {
        id: payload.id,
      },
      include: {
        CorpusIndex: true,
        TableForm: true,
      },
    });
  }
}
