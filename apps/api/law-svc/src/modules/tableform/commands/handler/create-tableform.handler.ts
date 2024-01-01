/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { CreateTableFormCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LawDataService } from '@law-knowledge/building-block';

@CommandHandler(CreateTableFormCommand)
export class CreateTableFormCommandHandler
  implements ICommandHandler<CreateTableFormCommand>
{
  constructor(private readonly dataService: LawDataService) {}
  async execute(payload: CreateTableFormCommand) {
    return await this.dataService.$transaction([
      this.dataService.tableForm.create({
        data: payload.tableForm,
      }),
    ]);
  }
}
