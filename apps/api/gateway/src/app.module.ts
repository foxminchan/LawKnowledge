import {
  JwtStrategy,
  ApiKeyStrategy,
  NestCacheModule,
  RefreshTokenStrategy,
  HttpCacheInterceptor,
  ClearCacheInterceptor,
} from '@law-knowledge/shared';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerMiddleware } from './middlewares';
import { OtelModule, RateLimitModule } from '@law-knowledge/framework';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthSvcModule, HealthCheckModule, LawSvcModule } from './modules';

@Module({
  imports: [
    OtelModule,
    LawSvcModule,
    AuthSvcModule,
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
