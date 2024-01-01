/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { UpdateCorpusCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@CommandHandler(UpdateCorpusCommand)
export class UpdateCorpusCommandHandler
  implements ICommandHandler<UpdateCorpusCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: UpdateCorpusCommand) {
    return await this.dataService.$transaction([
      this.dataService.corpusIndex.update({
        where: { id: payload.corpus.id },
        data: {
          ...payload.corpus,
        },
      }),
    ]);
  }
}
