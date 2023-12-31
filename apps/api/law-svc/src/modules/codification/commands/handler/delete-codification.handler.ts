/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { DeleteCodificationCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@CommandHandler(DeleteCodificationCommand)
export class DeleteCodificationCommandHandler
  implements ICommandHandler<DeleteCodificationCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: DeleteCodificationCommand) {
    return await this.dataService.$transaction([
      this.dataService.codificationIndex.delete({ where: { id: payload.id } }),
    ]);
  }
}
