/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  Injectable,
  ValidationPipe,
  ValidationError,
  BadRequestException,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ValidationErrorPipe extends ValidationPipe {
  constructor() {
    super({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      disableErrorMessages: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) =>
        new RpcException(
          new BadRequestException(
            validationErrors.map((error) => ({
              field: error.property,
              error: Object.values(error.constraints ?? {}),
            })),
          ),
        ),
    });
  }
}
