/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Injectable } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import type { UserResponse } from '../../auth-svc/user/user.payload';

type SocketConnection = {
  socketId: string;
  connectedUser: UserResponse;
};

@Injectable()
export class SocketConnectionService {
  private readonly socketConnections = new Map<string, UserResponse>();

  getAllOnlineUSers() {
    return [...this.socketConnections.values()];
  }

  saveConnection(connection: SocketConnection) {
    return this.socketConnections.set(
      connection.socketId,
      connection.connectedUser,
    );
  }

  findByUserId(id: string) {
    let user: UserResponse;
    for (const value of this.socketConnections.values()) {
      if (value.id === id) user = value;
    }
    if (!user) throw new WsException('User not found');
    return user;
  }

  findBySocketId(id: string) {
    const socket = this.socketConnections.get(id);
    if (!socket) throw new WsException('Socket not found');
    return socket;
  }

  deleteBySocketId(id: string) {
    return this.socketConnections.delete(id);
  }
}
