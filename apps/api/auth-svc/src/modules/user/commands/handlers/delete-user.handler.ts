/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { DeleteUserCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthDataService } from '@law-knowledge/building-block';

@CommandHandler(DeleteUserCommand)
export class DeleteUserCommandHandler
  implements ICommandHandler<DeleteUserCommand>
{
  constructor(private readonly dataService: AuthDataService) {}

  async execute(command: DeleteUserCommand) {
    return this.dataService.$transaction([
      this.dataService.user.delete({
        where: { id: command.id },
      }),
    ]);
  }
}
