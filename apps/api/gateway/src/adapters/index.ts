import { createClient } from 'redis';
import type { Adapter } from 'socket.io-adapter';
import { WebSocketAdapter } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import type { Namespace, Server, ServerOptions } from 'socket.io';

export class RedisIoAdapter extends IoAdapter implements WebSocketAdapter {
  private adapterConstructor!: (nsp: Namespace) => Adapter;

  async connectToRedis(): Promise<void> {
    const pubClient = createClient({
      url: process.env.REDIS_URL,
      password: process.env.REDIS_PASSWORD,
    });
    const subClient = pubClient.duplicate();
    await Promise.all([pubClient.connect(), subClient.connect()]);
    this.adapterConstructor = createAdapter(pubClient, subClient);
  }

  createIOServer(port: number, options?: ServerOptions): Server {
    return super.createIOServer(port, options).adapter(this.adapterConstructor);
  }
}
