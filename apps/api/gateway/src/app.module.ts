/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  LawSvcModule,
  AuthSvcModule,
  SearchSvcModule,
  HealthCheckModule,
} from './modules';
import {
  JwtStrategy,
  LoggerModule,
  NestHttpModule,
  ApiKeyStrategy,
  NestCacheModule,
  LoggerMiddleware,
  HttpCacheInterceptor,
  ClearCacheInterceptor,
} from '@law-knowledge/building-block';
import { NestConfigModule } from './configs';
import { RateLimitModule } from './throttler';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
  imports: [
    LoggerModule,
    LawSvcModule,
    AuthSvcModule,
    NestHttpModule,
    SearchSvcModule,
    RateLimitModule,
    NestCacheModule,
    NestConfigModule,
    HealthCheckModule,
  ],
  providers: [
    JwtStrategy,
    ApiKeyStrategy,
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpCacheInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClearCacheInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
