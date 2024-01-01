/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { CreateCorpusCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@CommandHandler(CreateCorpusCommand)
export class CreateCorpusCommandHandler
  implements ICommandHandler<CreateCorpusCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: CreateCorpusCommand) {
    return await this.dataService.$transaction([
      this.dataService.corpusIndex.create({ data: payload.corpus }),
    ]);
  }
}
