/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { IsEnum } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Roles } from '@law-knowledge/building-block';

export class CreateRoleDto {
  @IsEnum(Roles, {
    each: true,
    message: 'Vai trò phải là ADMIN, LAWYER hoặc CITIZEN',
  })
  name: string;
}

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  id: string;
}
