/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  timeout,
  Observable,
  catchError,
  throwError,
  TimeoutError,
} from 'rxjs';
import {
  CallHandler,
  NestInterceptor,
  ExecutionContext,
  RequestTimeoutException,
} from '@nestjs/common';

export class TimeoutInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<unknown> {
    return next.handle().pipe(
      timeout(5000),
      catchError((error: Error) => {
        if (error instanceof TimeoutError)
          return throwError(() => new RequestTimeoutException());

        return throwError(() => error);
      }),
    );
  }
}
