import { Module } from '@nestjs/common';
import { ChatHistoryModule, EmbeddingModule } from './modules';
import { ChatDataModule, LoggerModule } from '@law-knowledge/building-block';

@Module({
  imports: [LoggerModule, ChatDataModule, ChatHistoryModule, EmbeddingModule],
})
export class AppModule {}
