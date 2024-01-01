/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { CreateCorpusDto } from '../../dto';

export class CreateCorpusCommand implements ICommand {
  constructor(public readonly corpus: CreateCorpusDto) {}
}
