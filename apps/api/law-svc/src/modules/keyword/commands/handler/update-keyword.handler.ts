/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { UpdateKeywordCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@CommandHandler(UpdateKeywordCommand)
export class UpdateKeywordCommandHandler
  implements ICommandHandler<UpdateKeywordCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: UpdateKeywordCommand) {
    return await this.dataService.$transaction([
      this.dataService.keyword.update({
        where: { id: payload.keyword.id },
        data: { ...payload.keyword },
      }),
    ]);
  }
}
