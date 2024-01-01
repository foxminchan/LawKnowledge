/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { UpdateTableFormCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@CommandHandler(UpdateTableFormCommand)
export class UpdateTableFormCommandHandler
  implements ICommandHandler<UpdateTableFormCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: UpdateTableFormCommand) {
    return await this.dataService.$transaction([
      this.dataService.tableForm.update({
        where: { id: payload.tableForm.id },
        data: payload.tableForm,
      }),
    ]);
  }
}
