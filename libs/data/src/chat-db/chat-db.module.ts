import { Global, Module } from '@nestjs/common';
import { ChatDataService } from './chat-db.service';

@Global()
@Module({
  providers: [ChatDataService],
  exports: [ChatDataService],
})
export class ChatDataModule {}
