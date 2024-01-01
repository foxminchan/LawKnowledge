/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { UpdateTopicDto } from '../../dto';

export class UpdateTopicCommand implements ICommand {
  constructor(public readonly topic: UpdateTopicDto) {}
}
