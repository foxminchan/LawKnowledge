/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  AuthDataService,
  constructQueryOptions,
} from '@law-knowledge/building-block';
import { GetUsersQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetUsersQuery)
export class GetUsersQueryHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: GetUsersQuery) {
    return this.dataService.user.findMany({
      ...constructQueryOptions(payload.criteria),
    });
  }
}
