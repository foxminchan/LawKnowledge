import { RFC_TYPE } from '../@types';
import { Prisma } from '@prisma/client';
import { BaseExceptionFilter } from '@nestjs/core';
import { ProblemDocument } from 'http-problem-details';
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
      response.status(status).send(
        new ProblemDocument({
          status,
          title: exception.message.replace(/\n/g, ''),
          type: RFC_TYPE,
          detail: exception.stack,
        })
      );
    } else {
      super.catch(exception, host);
    }
  }
}
