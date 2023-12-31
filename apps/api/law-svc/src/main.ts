import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ValidationErrorPipe, sdk } from '@law-knowledge/building-block';
import { configs } from './configs';
import { join } from 'path';

async function bootstrap() {
  sdk.start();
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `${configs().url}:${configs().port}`,
      package: 'law',
      protoPath: join(__dirname, './proto/law.proto'),
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
