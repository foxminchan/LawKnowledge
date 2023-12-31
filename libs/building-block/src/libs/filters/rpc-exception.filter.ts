/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  Catch,
  Logger,
  HttpStatus,
  ArgumentsHost,
  ExceptionFilter,
} from '@nestjs/common';
import { RFC_TYPE } from '../@types';
import { RpcException } from '@nestjs/microservices';
import { ProblemDocument } from 'http-problem-details';

interface RpcError {
  status?: number;
  response: {
    message: string | undefined;
    error: string | undefined;
  };
}

@Catch(RpcException)
export class RpcExceptionToHttpExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const error: RpcError = exception.getError() as RpcError;
    const response = host.switchToHttp().getResponse();
    const statusCode = error.status ?? HttpStatus.INTERNAL_SERVER_ERROR;

    Logger.error(`❌ RPC has errors: ${JSON.stringify(exception)}`);

    response.status(statusCode).send(
      new ProblemDocument({
        status: statusCode,
        type: RFC_TYPE,
        title: error.response.error ?? 'Internal Server Error',
        detail:
          statusCode === HttpStatus.INTERNAL_SERVER_ERROR
            ? 'Dịch vụ hiện không khả dụng vào lúc này'
            : error.response.message,
      }),
    );
  }
}
