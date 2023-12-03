import { createParamDecorator } from '@nestjs/common';
import type { ExecutionContext } from '@nestjs/common';

export const ClientTimezone = createParamDecorator(
  (_, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.headers['x-client-timezone'] || 'Asia/Ho_Chi_Minh';
  }
);
