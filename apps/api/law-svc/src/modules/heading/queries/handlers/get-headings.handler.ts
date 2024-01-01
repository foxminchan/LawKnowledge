/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  LawDataService,
  constructQueryOptions,
} from '@law-knowledge/building-block';
import { GetHeadingsQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetHeadingsQuery)
export class GetHeadingsQueryHandler
  implements IQueryHandler<GetHeadingsQuery>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: GetHeadingsQuery) {
    return this.dataService.heading.findMany({
      ...constructQueryOptions(payload.criteria),
      include: { topic: true },
    });
  }
}
