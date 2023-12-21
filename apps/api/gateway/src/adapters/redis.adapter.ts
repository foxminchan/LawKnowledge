/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { createClient } from 'redis';
import { configs } from '../configs';
import type { Adapter } from 'socket.io-adapter';
import { WebSocketAdapter } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import type { Namespace, Server, ServerOptions } from 'socket.io';

export class RedisIoAdapter extends IoAdapter implements WebSocketAdapter {
  private adapterConstructor!: (nsp: Namespace) => Adapter;

  async connectToRedis(): Promise<void> {
    const pubClient = createClient({
      url: configs().redisUrl,
    });
    const subClient = pubClient.duplicate();
    await Promise.all([pubClient.connect(), subClient.connect()]);
    this.adapterConstructor = createAdapter(pubClient, subClient);
  }

  createIOServer(port: number, options?: ServerOptions): Server {
    return super.createIOServer(port, options).adapter(this.adapterConstructor);
  }
}
