/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { UpdateCodificationDto } from '../../dto';

export class UpdateCodificationCommand implements ICommand {
  constructor(public readonly codification: UpdateCodificationDto) {}
}
