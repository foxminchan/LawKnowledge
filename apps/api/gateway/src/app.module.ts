import {
  LawSvcModule,
  AuthSvcModule,
  SearchSvcModule,
  HealthCheckModule,
} from './modules';
import {
  JwtStrategy,
  NestHttpModule,
  ApiKeyStrategy,
  RateLimitModule,
  NestCacheModule,
  LoggerMiddleware,
  HttpCacheInterceptor,
  ClearCacheInterceptor,
} from '@law-knowledge/building-block';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
  imports: [
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
