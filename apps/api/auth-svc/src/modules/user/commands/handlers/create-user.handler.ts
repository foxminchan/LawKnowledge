/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { CreateUserCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CryptoUtils, AuthDataService } from '@law-knowledge/building-block';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: CreateUserCommand) {
    return this.dataService.$transaction(async () =>
      this.dataService.user.create({
        data: {
          ...payload.user,
          password: await CryptoUtils.hashString(payload.user.password),
          UserRoles: {
            create: [
              {
                role_id: '538cca28-8e18-47e7-8b6f-63c5a5ba386a',
              },
            ],
          },
        },
      }),
    );
  }
}
