import { logger } from './logger.otel';
import { Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        safe: true,
        logger: logger,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class LoggerModule {}
