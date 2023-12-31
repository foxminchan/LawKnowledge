/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

export type SignInPayload = {
  username: string;
  password: string;
};

export type SignInResponse = {
  access_token: string;
};
