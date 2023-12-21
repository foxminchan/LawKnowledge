/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { UpdateRoleCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthDataService } from '@law-knowledge/building-block';

@CommandHandler(UpdateRoleCommand)
export class UpdateRoleCommandHandler
  implements ICommandHandler<UpdateRoleCommand>
{
  constructor(public readonly dataService: AuthDataService) {}

  async execute(payload: UpdateRoleCommand) {
    return this.dataService.$transaction([
      this.dataService.roles.update({
        where: { id: payload.role.id },
        data: payload.role,
      }),
    ]);
  }
}
