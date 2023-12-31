/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

export type SignUpResponse = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  card: string;
};

export type SignUpPayload = {
  user: Omit<SignUpResponse, 'id'>;
  password: string;
  repassword: string;
};
