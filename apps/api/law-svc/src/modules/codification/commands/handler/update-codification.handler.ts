/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { UpdateCodificationCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@CommandHandler(UpdateCodificationCommand)
export class UpdateCodificationCommandHandler
  implements ICommandHandler<UpdateCodificationCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: UpdateCodificationCommand) {
    return await this.dataService.$transaction([
      this.dataService.codificationIndex.update({
        where: { id: payload.codification.id },
        data: payload.codification,
      }),
    ]);
  }
}
