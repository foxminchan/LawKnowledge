/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { AggregateRoot } from '@nestjs/cqrs';
import { TableFormType } from '@law-knowledge/building-block';

export class TableForm extends AggregateRoot {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly type: TableFormType,
    public readonly codification_id?: string,
    public readonly corpus_id?: string,
  ) {
    super();
  }
}
