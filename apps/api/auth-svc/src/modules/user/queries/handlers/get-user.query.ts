/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { GetUserQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AuthDataService } from '@law-knowledge/building-block';

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly dataService: AuthDataService) {}

  public async execute(payload: GetUserQuery) {
    return this.dataService.user.findUnique({
      where: {
        email: payload.email,
      },
    });
  }
}
