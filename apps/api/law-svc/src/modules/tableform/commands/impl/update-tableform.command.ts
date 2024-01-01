/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { UpdateTableFormDto } from '../../dto';

export class UpdateTableFormCommand implements ICommand {
  constructor(public readonly tableForm: UpdateTableFormDto) {}
}
