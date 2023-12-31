/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { API_KEY } from '../@types';
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'api-key',
) {
  constructor() {
    super(
      { header: 'X-Api-Key', prefix: '' },
      true,
      async (
        apikey: string,
        done: (arg0: UnauthorizedException | null, arg1: boolean) => unknown,
      ) => {
        const isValid = apikey === API_KEY;
        return !isValid
          ? done(new UnauthorizedException(), false)
          : done(null, true);
      },
    );
  }
}
