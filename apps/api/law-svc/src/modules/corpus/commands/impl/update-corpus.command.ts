/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { UpdateCorpusDto } from '../../dto';

export class UpdateCorpusCommand implements ICommand {
  constructor(public readonly corpus: UpdateCorpusDto) {}
}
