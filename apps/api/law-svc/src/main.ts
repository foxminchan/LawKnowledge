import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { ValidationErrorPipe, sdk } from '@law-knowledge/building-block';

async function bootstrap() {
  sdk.start();
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT || 8082,
      retryAttempts: 5,
      retryDelay: 3000,
    },
  } as TcpOptions);

  app.useGlobalPipes(new ValidationErrorPipe());
  app.useLogger(app.get(Logger));
  await app.listen();
}

bootstrap();
