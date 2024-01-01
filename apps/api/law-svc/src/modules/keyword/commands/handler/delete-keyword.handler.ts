/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { DeleteKeywordCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@CommandHandler(DeleteKeywordCommand)
export class DeleteKeywordCommandHandler
  implements ICommandHandler<DeleteKeywordCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: DeleteKeywordCommand) {
    return await this.dataService.$transaction([
      this.dataService.keyword.delete({ where: { id: payload.id } }),
    ]);
  }
}
