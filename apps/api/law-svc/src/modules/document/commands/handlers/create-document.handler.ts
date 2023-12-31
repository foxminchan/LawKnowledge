/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { CreateDocumentCommand } from '../impl';
import { LawDataService } from '@law-knowledge/building-block';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateDocumentCommand)
export class CreateDocumentCommandHandler
  implements ICommandHandler<CreateDocumentCommand>
{
  constructor(private readonly dataService: LawDataService) {}

  async execute(payload: CreateDocumentCommand) {
    return await this.dataService.$transaction([
      this.dataService.document.create({ data: payload.document }),
    ]);
  }
}
