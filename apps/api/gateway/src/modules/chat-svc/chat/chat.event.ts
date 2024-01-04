/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  Logger,
  UsePipes,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import {
  MessageBody,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { WsJwtGuard } from '../../../guard';
import { ChatService } from './chat.service';
import { Namespace, Socket } from 'socket.io';
import { UserService } from '../../auth-svc/user';
import { SocketConnectionService } from './connection.service';
import { WsValidationPipe } from '@law-knowledge/building-block';
import { UserResponse } from '../../auth-svc/user/user.interface';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'chat',
  transports: ['websocket'],
})
@UseGuards(WsJwtGuard)
@UsePipes(WsValidationPipe)
export class SocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(SocketGateway.name);

  @WebSocketServer()
  server: Namespace;

  constructor(
    private readonly chatService: ChatService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly connectionService: SocketConnectionService,
  ) {}

  async handleConnection(client: Socket) {
    try {
      const payload = await this.jwtService.verify(
        client.handshake.headers.authorization,
      );
      this.userService.getUser(payload.id).subscribe((user: UserResponse) => {
        if (!user) {
          this.handleDisconnect(client);
        } else {
          this.connectionService.saveConnection({
            connectedUser: user,
            socketId: client.id,
          });
        }
      });

      this.logger.debug(`Client connected: ${client.id}`);

      return this.server.emit(
        'onlineUsers',
        this.connectionService.getAllOnlineUSers(),
      );
    } catch {
      return this.handleDisconnect(client);
    }
  }

  afterInit(server: Socket): void {
    this.logger.log(`💬 Websocket Gateway initialized ${server.id} `);
  }

  handleDisconnect(client: Socket): void {
    this.logger.debug(`Client disconnected: ${client.id}`);
    this.connectionService.deleteBySocketId(client.id);
    client.emit('Error', new UnauthorizedException());
    client.disconnect();
  }

  @SubscribeMessage('answer')
  handleEvent(@MessageBody() data: string): void {
    setTimeout(() => {
      this.chatService.chatRetrieval({ query: data }).subscribe((res) => {
        this.server.emit('answer', res);
      });
    }, 2000);
  }
}
