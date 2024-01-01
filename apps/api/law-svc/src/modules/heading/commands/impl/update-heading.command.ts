/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { UpdateHeadingDto } from '../../dto';

export class UpdateHeadingCommand implements ICommand {
  constructor(public readonly heading: UpdateHeadingDto) {}
}
