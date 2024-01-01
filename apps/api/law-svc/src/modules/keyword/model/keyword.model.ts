/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { AggregateRoot } from '@nestjs/cqrs';

export class Keyword extends AggregateRoot {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly codification_id?: string,
  ) {
    super();
  }
}
