/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  AuthDataService,
  constructQueryOptions,
} from '@law-knowledge/building-block';
import { GetRolesQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetRolesQuery)
export class GetRolesQueryHandler implements IQueryHandler<GetRolesQuery> {
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: GetRolesQuery) {
    return this.dataService.roles.findMany({
      ...constructQueryOptions(payload.criteria),
    });
  }
}
