/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { AggregateRoot } from '@nestjs/cqrs';

export class Codification extends AggregateRoot {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly indexing: string,
    public readonly parent_id: string,
  ) {
    super();
  }
}
