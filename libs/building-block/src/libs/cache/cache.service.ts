/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Cache } from 'cache-manager';
import type { Observable } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { concatMap, from, map, toArray } from 'rxjs';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  deleteMatch(regexString: string): Observable<boolean> {
    return from(this.cacheManager.store.keys()).pipe(
      concatMap((keys: string[]) => {
        const regex = new RegExp(regexString, 'i');
        const match = keys.filter((key: string) => regex.test(key));

        return from(match);
      }),
      concatMap((key: string) => {
        return from(this.cacheManager.del(key));
      }),
      toArray(),
      map(() => true),
    );
  }

  async resetCache(): Promise<void> {
    return this.cacheManager.reset();
  }
}
