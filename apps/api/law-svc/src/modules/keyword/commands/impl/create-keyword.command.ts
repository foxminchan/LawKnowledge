/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { CreateKeywordDto } from '../../dto';

export class CreateKeywordCommand implements ICommand {
  constructor(public readonly keyword: CreateKeywordDto) {}
}
