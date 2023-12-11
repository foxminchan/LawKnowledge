import {
  LawSvcModule,
  AuthSvcModule,
  SearchSvcModule,
  HealthCheckModule,
} from './modules';
import {
  OtelModule,
  JwtStrategy,
  NestHttpModule,
  ApiKeyStrategy,
  RateLimitModule,
  NestCacheModule,
  LoggerMiddleware,
  RefreshTokenStrategy,
  HttpCacheInterceptor,
  ClearCacheInterceptor,
} from '@law-knowledge/building-block';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
  imports: [
    OtelModule,
    LawSvcModule,
    AuthSvcModule,
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
