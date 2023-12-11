import { IGNORE_CACHING_META } from '../@types/constants';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { CACHE_KEY_METADATA, CacheInterceptor } from '@nestjs/cache-manager';

@Injectable()
export class HttpCacheInterceptor extends CacheInterceptor {
  protected override isRequestCacheable(context: ExecutionContext): boolean {
    const http = context.switchToHttp();
    const request = http.getRequest();

    const ignoreCaching: boolean = this.reflector.get(
      IGNORE_CACHING_META,
      context.getHandler()
    );

    return !ignoreCaching && request.method === 'GET';
  }
}

@Injectable()
export class CacheKeyInterceptor extends CacheInterceptor {
  override trackBy(context: ExecutionContext): string | undefined {
    const httpAdapter = this.httpAdapterHost.httpAdapter;
    const isHttpApp = httpAdapter && !!httpAdapter.getRequestMethod;
    const cacheMetadata = this.reflector.get(
      CACHE_KEY_METADATA,
      context.getHandler()
    );

    const request = context.getArgByIndex(0);
    const userId = request.user?.idx;

    if (!isHttpApp || cacheMetadata) return `${cacheMetadata}_${userId}`;

    if (!this.isRequestCacheable(context)) return undefined;

    return `${httpAdapter.getRequestUrl(request)}_${userId}`;
  }
}
