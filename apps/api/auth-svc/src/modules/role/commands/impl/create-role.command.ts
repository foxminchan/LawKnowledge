/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { CreateRoleDto } from '../../dto';

export class CreateRoleCommand implements ICommand {
  constructor(public readonly role: CreateRoleDto) {}
}
