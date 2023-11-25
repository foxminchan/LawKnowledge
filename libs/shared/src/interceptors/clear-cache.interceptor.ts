import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { Observable, from, of } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { CacheService } from '@law-knowledge/framework';

@Injectable()
export class ClearCacheInterceptor implements NestInterceptor {
  constructor(private readonly cacheService: CacheService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const request = context.switchToHttp().getRequest();

        if (
          request.method !== 'GET' &&
          response.statusCode >= 200 &&
          response.statusCode < 300
        )
          return from(this.cacheService.resetCache());

        return of();
      })
    );
  }
}
