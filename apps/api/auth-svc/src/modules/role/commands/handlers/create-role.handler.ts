/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { CreateRoleCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthDataService } from '@law-knowledge/building-block';

@CommandHandler(CreateRoleCommand)
export class CreateRoleCommandHandler
  implements ICommandHandler<CreateRoleCommand>
{
  constructor(public readonly dataService: AuthDataService) {}

  async execute(payload: CreateRoleCommand) {
    return this.dataService.$transaction([
      this.dataService.roles.create({
        data: payload.role,
      }),
    ]);
  }
}
