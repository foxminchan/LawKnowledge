/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { CreateUserDto } from '../../dto';

export class CreateUserCommand implements ICommand {
  constructor(public readonly user: CreateUserDto) {}
}
