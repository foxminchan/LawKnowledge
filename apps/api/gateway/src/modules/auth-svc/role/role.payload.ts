/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { ApiProperty } from '@nestjs/swagger';

export class Role {
  @ApiProperty()
  name: string;
}

export class RoleCreatePayload extends Role {}

export class RoleUpdatePayload extends Role {
  @ApiProperty()
  id: string;
}

export class RoleResponse extends Role {
  @ApiProperty()
  id: string;
}
