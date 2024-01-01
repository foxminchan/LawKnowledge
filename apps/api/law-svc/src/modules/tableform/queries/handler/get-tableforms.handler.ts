/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  LawDataService,
  constructQueryOptions,
} from '@law-knowledge/building-block';
import { GetTableFormsQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetTableFormsQuery)
export class GetTableFormsQueryHandler
  implements IQueryHandler<GetTableFormsQuery>
{
  constructor(private readonly dataService: LawDataService) {}
  async execute(payload: GetTableFormsQuery) {
    return await this.dataService.tableForm.findMany({
      ...constructQueryOptions(payload.criteria),
      include: {
        corpus: true,
        codification: true,
      },
    });
  }
}
