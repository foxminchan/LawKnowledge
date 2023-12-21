/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

interface UserBase {
  name: string;
  email: string;
  phone: string;
  card: string;
  address: string;
  password: string;
  repassword: string;
}

export interface RegisterRequest extends UserBase {}

export interface RegisterResponse extends UserBase {
  id: string;
}

export interface UserUpdateRequest extends RegisterResponse {}

export interface AuthSvc {
  login(data: LoginRequest): Observable<LoginResponse>;
  register(data: RegisterRequest): Observable<RegisterResponse>;
  findOne(email: string): Observable<RegisterResponse>;
}
