/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { GetCodificationQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@QueryHandler(GetCodificationQuery)
export class GetConditionQueryHandler
  implements IQueryHandler<GetCodificationQuery>
{
  constructor(private readonly dataService: LawDataService) {}
  async execute(payload: GetCodificationQuery) {
    return await this.dataService.codificationIndex.findUnique({
      where: { id: payload.id },
      include: {
        Document: true,
        CorpusIndex: true,
        Keyword: true,
        TableForm: true,
      },
    });
  }
}
