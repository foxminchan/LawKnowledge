import { Injectable } from '@nestjs/common';
import type { NestMiddleware } from '@nestjs/common';
import { CacheService } from '@law-knowledge/shared';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class ClearCacheMiddleware implements NestMiddleware {
  constructor(private readonly cacheService: CacheService) {}

  async use(
    _request: FastifyRequest['raw'],
    _response: FastifyReply['raw'],
    next: () => void
  ) {
    _request.headers['x-clear-cache'] && (await this.cacheService.resetCache());
    next();
  }
}
