/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { join } from 'path';
import { Module } from '@nestjs/common';
import { configs } from '../../configs';
import { WsJwtGuard } from '../../guard';
import { SocketGateway } from './chat/chat.event';
import { ChatService } from './chat/chat.service';
import { ChatController } from './chat/chat.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SocketConnectionService } from './chat/connection.service';
import { ChatHistoryController, ChatHistoryService } from './message';
import { ChatSessionController, ChatSessionService } from './session';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CHAT_SERVICE',
        transport: Transport.GRPC,
        options: {
          url: `${configs().chatSvcHost}:${configs().chatSvcPort}`,
          package: 'chat',
          protoPath: join(__dirname, './proto/chat-svc/chat-svc.proto'),
          loader: {
            enums: String,
            objects: true,
            arrays: true,
            includeDirs: [join(__dirname, './proto/chat-svc')],
          },
        },
      },
    ]),
  ],
  controllers: [ChatController, ChatHistoryController, ChatSessionController],
  providers: [
    WsJwtGuard,
    ChatService,
    SocketGateway,
    ChatSessionService,
    ChatHistoryService,
    SocketConnectionService,
  ],
})
export class ChatSvcModule {}
