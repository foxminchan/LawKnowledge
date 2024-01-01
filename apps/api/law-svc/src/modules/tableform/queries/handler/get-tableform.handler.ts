/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { GetTableFormQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@QueryHandler(GetTableFormQuery)
export class GetTableFormQueryHandler
  implements IQueryHandler<GetTableFormQuery>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(query: GetTableFormQuery) {
    return await this.dataService.tableForm.findUnique({
      where: { id: query.id },
      include: {
        corpus: true,
        condification: true,
      },
    });
  }
}
