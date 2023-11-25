import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import compression from '@fastify/compress';
import { SetupSwagger } from '@law-knowledge/framework';
import fastifyCsrfProtection from '@fastify/csrf-protection';
import { AppUtils, NotFoundExceptionFilter } from '@law-knowledge/shared';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

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

  app.useGlobalFilters(new NotFoundExceptionFilter());
  app.enableShutdownHooks();

  SetupSwagger(app);

  AppUtils.processAppWithGrace(app);

  await app.listen(process.env.PORT || 8080);
}

void (async (): Promise<void> => {
  try {
    await bootstrap();
    Logger.log(`🚀 Api Gateway is running`);
  } catch (error) {
    Logger.error(error, '❌ Error starting server');
  }
})();
