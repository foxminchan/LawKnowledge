import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import type { Type } from '@nestjs/common';
import { applyDecorators } from '@nestjs/common';

interface SwaggerResponseOptions<T, K> {
  operation: string;
  params?: string[];
  query?: string[];
  notFound?: string;
  badRequest?: string;
  body?: Type<T>;
  response?: Type<K>;
}

export function SwaggerResponse<T, K>({
  operation,
  notFound,
  badRequest,
  params,
  query,
  body,
  response,
}: SwaggerResponseOptions<T, K>) {
  const decsToApply = [ApiOperation({ summary: operation })];

  if (params) {
    for (const parameter of params)
      decsToApply.push(
        ApiParam({ name: parameter, required: true, type: String })
      );
  }

  if (query)
    for (const parameter of query)
      decsToApply.push(
        ApiQuery({ name: parameter, required: false, type: String })
      );

  if (badRequest)
    decsToApply.push(ApiResponse({ status: 400, description: badRequest }));

  if (notFound)
    decsToApply.push(ApiResponse({ status: 404, description: notFound }));

  if (body) decsToApply.push(ApiBody({ type: body }));

  if (response) decsToApply.push(ApiResponse({ type: response }));

  return applyDecorators(...decsToApply);
}
