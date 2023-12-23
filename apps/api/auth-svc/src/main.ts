/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { join } from 'path';
import { configs } from './configs';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ValidationErrorPipe, sdk } from '@law-knowledge/building-block';

async function bootstrap() {
  sdk.start();
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `${configs().url}:${configs().port}`,
      package: 'auth',
      protoPath: join(__dirname, './proto/auth.proto'),
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        includeDirs: [join(__dirname, './proto')],
      },
    },
  });

  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationErrorPipe());
  await app.listen();
}

bootstrap();
