import { ApiKeyAuthGuard } from '../guards';
import type { CanActivate, Type } from '@nestjs/common';
import { UseGuards, applyDecorators } from '@nestjs/common';
import { ApiSecurity, ApiUnauthorizedResponse } from '@nestjs/swagger';

interface KeyGuard {
  guards?: Type<CanActivate>[];
  unauthorizedResponse?: string;
}

export function Key(_options?: KeyGuard) {
  const options = {
    guards: [ApiKeyAuthGuard],
    unauthorizedResponse: 'Tài nguyên chỉ dành cho người dùng có API Key',
    ..._options,
  } satisfies KeyGuard;

  return applyDecorators(
    UseGuards(...options.guards),
    ApiSecurity('X-Api-Key'),
    ApiUnauthorizedResponse({ description: options.unauthorizedResponse })
  );
}
