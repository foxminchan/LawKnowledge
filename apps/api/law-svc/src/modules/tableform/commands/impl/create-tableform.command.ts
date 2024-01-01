/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { CreateTableFormDto } from '../../dto';

export class CreateTableFormCommand implements ICommand {
  constructor(public readonly tableForm: CreateTableFormDto) {}
}
