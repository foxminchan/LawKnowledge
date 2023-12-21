/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { AggregateRoot } from '@nestjs/cqrs';

export class User extends AggregateRoot {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
    public card: string,
    public address: string,
    public password: string,
  ) {
    super();
  }
}
