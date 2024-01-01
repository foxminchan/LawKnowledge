/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { CreateHeadingDto } from '../../dto';

export class CreateHeadingCommand implements ICommand {
  constructor(public readonly heading: CreateHeadingDto) {}
}
