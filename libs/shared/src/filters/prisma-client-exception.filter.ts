import { Prisma } from '@prisma/client';
import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  override catch(
    exception: Prisma.PrismaClientKnownRequestError,
    host: ArgumentsHost
  ) {
    const response = host.switchToHttp().getResponse();

    if (exception.code === 'P2002') {
      const status = HttpStatus.CONFLICT;
      response.status(status).json({
        statusCode: status,
        message: exception.message.replace(/\n/g, ''),
      });
    } else {
      super.catch(exception, host);
    }
  }
}
