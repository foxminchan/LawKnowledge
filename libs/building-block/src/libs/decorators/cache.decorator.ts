import { NoCache } from './nocache.decorator';
import { CacheKeyInterceptor } from '../interceptors';
import { UseInterceptors, applyDecorators } from '@nestjs/common';

export function ApplyNoneCache() {
  return applyDecorators(NoCache, UseInterceptors(CacheKeyInterceptor));
}
