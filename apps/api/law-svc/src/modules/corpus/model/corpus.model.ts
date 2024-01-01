/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { AggregateRoot } from '@nestjs/cqrs';

export class Corpus extends AggregateRoot {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly indexing?: string,
    public readonly heading_id?: string,
    public readonly parent_id?: string,
    public readonly related_id?: string,
    public readonly codification_id?: string,
  ) {
    super();
  }
}
