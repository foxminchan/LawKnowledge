import {
  JwtStrategy,
  ClearCacheInterceptor,
  HttpCacheInterceptor,
} from '@law-knowledge/shared';
import {
  NestCacheModule,
  OtelModule,
  RateLimitModule,
} from '@law-knowledge/framework';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerMiddleware } from './middlewares';
import { AuthSvcModule, HealthCheckModule } from './modules';
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
