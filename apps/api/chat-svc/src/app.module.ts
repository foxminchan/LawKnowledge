import { Module } from '@nestjs/common';
import { LoggerModule } from '@law-knowledge/framework';

@Module({
  imports: [LoggerModule],
})
export class AppModule {}
