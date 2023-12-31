/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { IQuery } from '@nestjs/cqrs';

export class GetCodificationQuery implements IQuery {
  constructor(public readonly id: string) {}
}
