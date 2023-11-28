import {
  JwtStrategy,
  NestCacheModule,
  RefreshTokenStrategy,
  HttpCacheInterceptor,
  ClearCacheInterceptor,
} from '@law-knowledge/shared';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerMiddleware } from './middlewares';
import { AuthSvcModule, HealthCheckModule } from './modules';
import { OtelModule, RateLimitModule } from '@law-knowledge/framework';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
  imports: [
    OtelModule,
    AuthSvcModule,
    NestCacheModule,
    RateLimitModule,
    HealthCheckModule,
  ],
  providers: [
    JwtStrategy,
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
