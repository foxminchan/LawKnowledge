/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { UpdateDocumentDto } from '../../dto';

export class UpdateDocumentCommand implements ICommand {
  constructor(public readonly document: UpdateDocumentDto) {}
}
