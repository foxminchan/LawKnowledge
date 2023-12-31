/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { IQuery } from '@nestjs/cqrs';

export class GetDocumentQuery implements IQuery {
  constructor(public readonly id: string) {}
}
