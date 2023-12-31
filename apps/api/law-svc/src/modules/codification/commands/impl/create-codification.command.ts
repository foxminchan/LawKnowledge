/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { CreateCodificationDto } from '../../dto';

export class CreateCodificationCommand implements ICommand {
  constructor(public readonly codification: CreateCodificationDto) {}
}
