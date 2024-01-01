/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { DeleteCorpusCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@CommandHandler(DeleteCorpusCommand)
export class DeleteCorpusCommandHandler
  implements ICommandHandler<DeleteCorpusCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: DeleteCorpusCommand) {
    return await this.dataService.$transaction([
      this.dataService.corpusIndex.delete({ where: { id: payload.id } }),
    ]);
  }
}
