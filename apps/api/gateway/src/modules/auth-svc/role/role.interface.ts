/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';

export interface Role {
  name: string;
}

export interface RoleCreateRequest extends Role {}

export interface RoleResponse extends Role {
  id: string;
}

export interface RoleUpdateRequest extends Role {
  id: string;
}

export interface RoleSvc {
  createRole(data: RoleCreateRequest): Observable<RoleResponse>;
  updateRole(data: RoleUpdateRequest): Observable<RoleResponse>;
  deleteRole(id: string): Observable<RoleResponse>;
  getRole(id: string): Observable<RoleResponse>;
  getRoles(criteria?: Criteria): Observable<RoleResponse[]>;
}
