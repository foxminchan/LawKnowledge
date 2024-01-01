/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { UpdateKeywordDto } from '../../dto';

export class UpdateKeywordCommand implements ICommand {
  constructor(public readonly keyword: UpdateKeywordDto) {}
}
