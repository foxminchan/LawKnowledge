/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { NoCache } from './nocache.decorator';
import { CacheKeyInterceptor } from '../interceptors';
import { UseInterceptors, applyDecorators } from '@nestjs/common';

export function ApplyNoneCache() {
  return applyDecorators(NoCache, UseInterceptors(CacheKeyInterceptor));
}
