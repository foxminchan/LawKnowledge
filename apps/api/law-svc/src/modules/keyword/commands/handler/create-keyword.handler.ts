/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { CreateKeywordCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@CommandHandler(CreateKeywordCommand)
export class CreateKeywordCommandHandler
  implements ICommandHandler<CreateKeywordCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: CreateKeywordCommand) {
    return await this.dataService.$transaction([
      this.dataService.keyword.create({ data: payload.keyword }),
    ]);
  }
}
