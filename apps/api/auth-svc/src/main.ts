import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { GrpcOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `${process.env.URL}:${process.env.PORT}`,
      package: 'auth',
      protoPath: './src/proto/auth.proto',
      loader: {
        enums: String,
        objects: true,
        arrays: true,
      },
    },
  } as GrpcOptions);

  await app.listen();
}

void (async (): Promise<void> => {
  try {
    await bootstrap();
    Logger.log(`🚀 Auth Service is running`);
  } catch (error) {
    Logger.error(error, '❌ Error starting server');
  }
})();
