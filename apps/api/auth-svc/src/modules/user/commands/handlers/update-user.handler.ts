/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { UpdateUserCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthDataService } from '@law-knowledge/building-block';

@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler
  implements ICommandHandler<UpdateUserCommand>
{
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: UpdateUserCommand) {
    return this.dataService.$transaction([
      this.dataService.user.update({
        where: { id: payload.user.id },
        data: {
          name: payload.user.name,
          email: payload.user.email,
          phone: payload.user.phone,
          address: payload.user.address,
          card: payload.user.card,
        },
      }),
    ]);
  }
}
