/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';

export class DeleteHeadingCommand implements ICommand {
  constructor(public readonly id: string) {}
}
