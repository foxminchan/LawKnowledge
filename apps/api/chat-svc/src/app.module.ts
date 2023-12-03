import { Module } from '@nestjs/common';
import { LoggerModule } from '@law-knowledge/framework';
import { ChatHistoryModule } from './modules/chat-history';

@Module({
  imports: [LoggerModule, ChatHistoryModule],
})
export class AppModule {}
