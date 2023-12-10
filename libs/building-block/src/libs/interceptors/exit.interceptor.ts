import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { throwError } from 'rxjs';
import type { Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ExitInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler
  ): Observable<unknown> {
    return next.handle().pipe(
      catchError((error: Error) => {
        return throwError(() => error);
      }),
      map((data: unknown) => data)
    );
  }
}
