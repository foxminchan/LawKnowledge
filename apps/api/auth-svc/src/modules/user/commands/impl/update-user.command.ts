/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { UpdateUserDto } from '../../dto';

export class UpdateUserCommand implements ICommand {
  constructor(public readonly user: UpdateUserDto) {}
}
