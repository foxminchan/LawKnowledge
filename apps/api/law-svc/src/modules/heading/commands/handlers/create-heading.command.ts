/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { CreateHeadingCommand } from '../impl';
import { LawDataService } from '@law-knowledge/building-block';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateHeadingCommand)
export class CreateHeadingCommandHandler
  implements ICommandHandler<CreateHeadingCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: CreateHeadingCommand) {
    return this.dataService.$transaction([
      this.dataService.heading.create({ data: payload.heading }),
    ]);
  }
}
