/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { CreateTopicDto } from '../../dto';

export class CreateTopicCommand implements ICommand {
  constructor(public readonly topic: CreateTopicDto) {}
}
