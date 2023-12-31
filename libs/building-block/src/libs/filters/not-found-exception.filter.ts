/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  Catch,
  HttpStatus,
  ArgumentsHost,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common';
import { RFC_TYPE } from '../@types';
import { ProblemDocument } from 'http-problem-details';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(_exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = HttpStatus.NOT_FOUND;
    response.status(status).send(
      new ProblemDocument({
        status,
        title: _exception.message,
        type: RFC_TYPE,
        detail: _exception.stack,
      }),
    );
  }
}
