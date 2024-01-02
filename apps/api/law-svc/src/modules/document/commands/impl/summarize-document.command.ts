/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';

export class SummarizeDocumentCommand implements ICommand {
  constructor(public readonly content: string) {}
}
