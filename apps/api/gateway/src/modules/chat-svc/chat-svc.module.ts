import { Module } from '@nestjs/common';
import { ChatService } from './chat-svc.service';
import { ChatController } from './chat-svc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CHAT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.CHAT_SVC_HOST || 'localhost',
          port: parseInt(process.env.CHAT_SVC_PORT, 10) || 8084,
        },
      },
    ]),
  ],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatSvcModule {}
