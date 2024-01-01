/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { GetKeywordQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@QueryHandler(GetKeywordQuery)
export class GetKeywordQueryHandler implements IQueryHandler<GetKeywordQuery> {
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: GetKeywordQuery) {
    return await this.dataService.keyword.findUnique({
      where: { id: payload.id },
      include: {
        condification: true,
      },
    });
  }
}
