import type { CanActivate, Type } from '@nestjs/common';
import { UseGuards, applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards';

interface AuthGuard {
  guards?: Type<CanActivate>[];
  unauthorizedResponse?: string;
}

export function Auth(_options?: AuthGuard) {
  const options = {
    guards: [JwtAuthGuard],
    unauthorizedResponse: 'Bạn không có quyền truy cập vào tài nguyên này',
    ..._options,
  } satisfies AuthGuard;

  return applyDecorators(
    UseGuards(...options.guards),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: options.unauthorizedResponse })
  );
}
