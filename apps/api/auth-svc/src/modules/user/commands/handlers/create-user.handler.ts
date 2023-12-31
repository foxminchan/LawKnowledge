/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { CreateUserCommand } from '../impl';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  CryptoUtils,
  AuthDataService,
  Roles,
} from '@law-knowledge/building-block';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private readonly dataService: AuthDataService) {}

  async execute(payload: CreateUserCommand) {
    return this.dataService.$transaction(async () =>
      this.dataService.user.create({
        data: {
          name: payload.user.name,
          email: payload.user.email,
          phone: payload.user.phone,
          address: payload.user.address,
          card: payload.user.card,
          password: await CryptoUtils.hashString(payload.user.password),
          UserRoles: {
            create: [
              {
                role_id: this.dataService.roles.findFirst({
                  where: { name: Roles.CITIZEN },
                })['id'] as string,
              },
            ],
          },
        },
      }),
    );
  }
}
