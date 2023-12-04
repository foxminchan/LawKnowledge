import { Module } from '@nestjs/common';
import { LoggerModule } from '@law-knowledge/framework';
import { ChatHistoryModule, EmbeddingModule } from './modules';

@Module({
  imports: [LoggerModule, ChatHistoryModule, EmbeddingModule],
})
export class AppModule {}
