/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { GetDocumentQuery } from '../impl';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@QueryHandler(GetDocumentQuery)
export class GetDocumentQueryHandler
  implements IQueryHandler<GetDocumentQuery>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: GetDocumentQuery) {
    return this.dataService.document.findUnique({
      where: {
        id: payload.id,
      },
      include: {
        heading: {
          include: {
            topic: true,
          },
        },
      },
    });
  }
}
