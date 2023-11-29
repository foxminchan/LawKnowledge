import {
  Catch,
  Logger,
  HttpStatus,
  ArgumentsHost,
  ExceptionFilter,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

interface RpcError {
  status?: number;
  message: object | string;
}

@Catch(RpcException)
export class RpcExceptionToHttpExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const error: RpcError = exception.getError() as RpcError;
    const response = host.switchToHttp().getResponse();
    const statusCode = error.status ?? HttpStatus.INTERNAL_SERVER_ERROR;

    Logger.error(`❌ RPC has errors: ${JSON.stringify(error)}`);

    response.status(statusCode).send({
      statusCode,
      message:
        statusCode === HttpStatus.INTERNAL_SERVER_ERROR
          ? 'Dịch vụ hiện không khả dụng vào lúc này'
          : error,
    });
  }
}
