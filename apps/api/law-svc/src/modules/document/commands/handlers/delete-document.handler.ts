/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { DeleteDocumentCommand } from '../impl';
import { LawDataService } from '@law-knowledge/building-block';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteDocumentCommand)
export class DeleteDocumentCommandHandler
  implements ICommandHandler<DeleteDocumentCommand>
{
  constructor(public readonly dataService: LawDataService) {}

  async execute(payload: DeleteDocumentCommand) {
    return this.dataService.$transaction([
      this.dataService.document.delete({
        where: {
          id: payload.id,
        },
      }),
    ]);
  }
}
