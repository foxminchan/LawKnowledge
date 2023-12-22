/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import Redis from 'ioredis';
import { configs } from '../configs';
import { Module } from '@nestjs/common';
import { ThrottlerModule, seconds } from '@nestjs/throttler';
import { ThrottlerStorageRedisService } from 'nestjs-throttler-storage-redis';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [{ limit: 20, ttl: seconds(60) }],
      storage: new ThrottlerStorageRedisService(
        new Redis({
          path: configs().redisUrl,
        }),
      ),
    }),
  ],
})
export class RateLimitModule {}
