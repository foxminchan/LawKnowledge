import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  getSchemaPath,
} from '@nestjs/swagger';
import { Criteria } from '../helpers';
import { Type, applyDecorators } from '@nestjs/common';

interface PagingSwaggerResponseOptions<T, K> {
  operation: string;
  params?: string[];
  body?: Type<T>;
  response?: Type<K>;
}

export function PagingSwaggerResponse<T, K>({
  operation,
  params,
  body,
  response,
}: PagingSwaggerResponseOptions<T, K>) {
  const decsToApply = [ApiOperation({ summary: operation })];

  if (params) {
    for (const parameter of params)
      decsToApply.push(
        ApiParam({ name: parameter, required: true, type: String })
      );
  }

  if (body) decsToApply.push(ApiBody({ type: body }));

  decsToApply.push(
    ApiOkResponse({
      description: `Successfully received ${response}`,
      schema: {
        oneOf: [
          {
            allOf: [
              { $ref: getSchemaPath(Criteria) },
              {
                properties: {
                  data: {
                    items: { $ref: response ? getSchemaPath(response) : '' },
                  },
                },
              },
            ],
          },
        ],
      },
    })
  );

  decsToApply.push(ApiQuery({ name: 'page', required: false, type: Number }));
  decsToApply.push(ApiQuery({ name: 'limit', required: false, type: Number }));
  decsToApply.push(ApiQuery({ name: 'sort', required: false, type: String }));
  decsToApply.push(
    ApiQuery({ name: 'orderBy', required: false, type: String })
  );

  return applyDecorators(...decsToApply);
}
