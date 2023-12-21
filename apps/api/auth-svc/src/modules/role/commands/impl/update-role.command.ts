/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ICommand } from '@nestjs/cqrs';
import { UpdateRoleDto } from '../../dto';

export class UpdateRoleCommand implements ICommand {
  constructor(public readonly role: UpdateRoleDto) {}
}
