/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {
  sdk,
  AppUtils,
  SetupSwagger,
  CriteriaPipe,
  NotFoundExceptionFilter,
  RpcExceptionToHttpExceptionFilter,
} from '@law-knowledge/building-block';
import cors from '@fastify/cors';
import { configs } from './configs';
import helmet from '@fastify/helmet';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import compression from '@fastify/compress';
import { RedisIoAdapter } from './adapters';
import { VersioningType } from '@nestjs/common';
import fastifyCsrfProtection from '@fastify/csrf-protection';

async function bootstrap() {
  sdk.start();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.register(fastifyCsrfProtection);
  app.register(cors, {
    origin: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD', 'OPTIONS'],
    credentials: true,
  });
  app.register(compression, { encodings: ['gzip', 'deflate'] });
  app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  });

  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new CriteriaPipe());
  app.useGlobalFilters(new NotFoundExceptionFilter());
  app.useGlobalFilters(new RpcExceptionToHttpExceptionFilter());
  app.enableShutdownHooks();

  SetupSwagger(app);

  const redisIoAdapter = new RedisIoAdapter(app);

  await redisIoAdapter.connectToRedis();
  app.useWebSocketAdapter(redisIoAdapter);

  AppUtils.processAppWithGrace(app);

  await app.listen(configs().port || 8080);
}

bootstrap();
