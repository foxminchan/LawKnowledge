import { join } from 'path';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { GrpcOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `${process.env.URL}:${process.env.PORT}`,
      package: 'auth',
      protoPath: join(__dirname, './proto/auth.proto'),
      loader: {
        enums: String,
        objects: true,
        arrays: true,
      },
    },
  } as GrpcOptions);

  app.useLogger(app.get(Logger));
  await app.listen();
}

bootstrap();
