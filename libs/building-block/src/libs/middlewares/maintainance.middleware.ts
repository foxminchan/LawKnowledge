/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import type { NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { Injectable, ServiceUnavailableException } from '@nestjs/common';

@Injectable()
export class SettingMaintenanceMiddleware implements NestMiddleware {
  async use(
    _request: FastifyRequest['raw'],
    _response: FastifyReply['raw'],
    next: () => void,
  ): Promise<void> {
    const maintenance: boolean = true;

    if (maintenance) {
      throw new ServiceUnavailableException({
        statusCode: 503,
        message: 'Dịch vụ đang bảo trì',
      });
    }

    next();
  }
}
