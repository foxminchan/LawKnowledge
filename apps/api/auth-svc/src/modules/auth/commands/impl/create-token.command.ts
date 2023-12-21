/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { LoginDto } from '../../dto';
import { ICommand } from '@nestjs/cqrs';

export class CreateTokenCommand implements ICommand {
  constructor(public readonly payload: LoginDto) {}
}
