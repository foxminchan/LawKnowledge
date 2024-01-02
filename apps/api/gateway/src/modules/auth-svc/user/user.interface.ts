/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';

export interface User {
  name: string;
  email: string;
  phone: string;
  card: string;
  address: string;
  password: string;
}

export interface UserCreateRequest extends User {
  repassword: string;
}

export interface UserResponse extends User {
  id: string;
}

export interface UserUpdateRequest extends User {
  id: string;
  repassword: string;
}

export interface UserSvc {
  createUser(data: UserCreateRequest): Observable<UserResponse>;
  updateUser(data: UserUpdateRequest): Observable<UserResponse>;
  deleteUser(id: string): Observable<UserResponse>;
  getUser(id: string): Observable<UserResponse>;
  getUsers(criteria?: Criteria): Observable<UserResponse[]>;
}
