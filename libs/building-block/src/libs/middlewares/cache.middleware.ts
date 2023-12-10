import { Injectable } from '@nestjs/common';
import type { NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { CacheService } from '@law-knowledge/building-block';

@Injectable()
export class ClearCacheMiddleware implements NestMiddleware {
  constructor(private readonly cacheService: CacheService) {}

  async use(
    _request: FastifyRequest['raw'],
    _response: FastifyReply['raw'],
    next: () => void,
  ) {
    _request.headers['x-clear-cache'] && (await this.cacheService.resetCache());
    next();
  }
}
