import { Module } from '@nestjs/common';
import { ChatDataModule } from '@law-knowledge/data';
import { LoggerModule } from '@law-knowledge/framework';
import { ChatHistoryModule, EmbeddingModule } from './modules';

@Module({
  imports: [LoggerModule, ChatDataModule, ChatHistoryModule, EmbeddingModule],
})
export class AppModule {}
