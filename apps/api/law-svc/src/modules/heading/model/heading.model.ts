/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { AggregateRoot } from '@nestjs/cqrs';

export class Heading extends AggregateRoot {
  constructor(
    public id: string,
    public name: string,
    public no: number,
    public topic_id: string,
  ) {
    super();
  }
}
