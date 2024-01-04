/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Socket } from 'socket.io';
import { WsException } from '@nestjs/websockets';
import { UserService } from '../modules/auth-svc/user';

@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const client = context.switchToWs().getClient<Socket>()?.handshake;

    if (!client.headers.authorization)
      throw new WsException('Bạn chưa đăng nhập');
    const token = client.headers.authorization;

    const payload = await this.jwtService.verify(token);
    const user = this.userService.getUser(payload.id);

    if (!user) throw new WsException('Tài khoản không tồn tại');

    return true;
  }
}
