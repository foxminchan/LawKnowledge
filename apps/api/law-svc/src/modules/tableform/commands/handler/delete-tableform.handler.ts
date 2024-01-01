/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { DeleteTableFormCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@CommandHandler(DeleteTableFormCommand)
export class DeleteTableFormCommandHandler
  implements ICommandHandler<DeleteTableFormCommand>
{
  constructor(private readonly dataService: LawDataService) {}
  async execute(payload: DeleteTableFormCommand) {
    return await this.dataService.$transaction([
      this.dataService.tableForm.delete({
        where: { id: payload.id },
      }),
    ]);
  }
}
