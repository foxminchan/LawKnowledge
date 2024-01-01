/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { DeleteHeadingCommand } from '../impl';
import { LawDataService } from '@law-knowledge/building-block';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteHeadingCommand)
export class DeleteHeadingCommandHandler
  implements ICommandHandler<DeleteHeadingCommand>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: DeleteHeadingCommand) {
    return this.dataService.$transaction([
      this.dataService.heading.delete({ where: { id: payload.id } }),
    ]);
  }
}
