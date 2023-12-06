import {
  LawSvcModule,
  AuthSvcModule,
  ChatSvcModule,
  SearchSvcModule,
  HealthCheckModule,
} from './modules';
import {
  JwtStrategy,
  ApiKeyStrategy,
  NestCacheModule,
  RefreshTokenStrategy,
  HttpCacheInterceptor,
  ClearCacheInterceptor,
} from '@law-knowledge/shared';
import {
  OtelModule,
  NestHttpModule,
  RateLimitModule,
} from '@law-knowledge/framework';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerMiddleware } from './middlewares';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
  imports: [
    OtelModule,
    LawSvcModule,
    AuthSvcModule,
    ChatSvcModule,
    NestHttpModule,
    SearchSvcModule,
    NestCacheModule,
    RateLimitModule,
    HealthCheckModule,
  ],
  providers: [
    JwtStrategy,
    ApiKeyStrategy,
    RefreshTokenStrategy,
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
