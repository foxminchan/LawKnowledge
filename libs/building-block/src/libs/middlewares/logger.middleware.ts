import { FastifyRequest, FastifyReply } from 'fastify';
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(
    _req: FastifyRequest['raw'],
    _res: FastifyReply['raw'],
    next: () => void
  ): void {
    Logger.log('Request...');
    next();
  }
}
