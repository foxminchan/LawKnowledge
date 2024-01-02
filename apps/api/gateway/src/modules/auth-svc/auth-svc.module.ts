/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { join } from 'path';
import { configs } from '../../configs';
import { Module } from '@nestjs/common';
import { AuthController, AuthService } from './auth';
import { RoleController, RoleService } from './role';
import { UserController, UserService } from './user';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.GRPC,
        options: {
          url: `${configs().authSvcHost}:${configs().authSvcPort}`,
          package: 'auth',
          protoPath: join(__dirname, './proto/auth-svc/auth-svc.proto'),
          loader: {
            enums: String,
            objects: true,
            arrays: true,
            includeDirs: [join(__dirname, './proto/auth-svc')],
          },
        },
      },
    ]),
  ],
  controllers: [AuthController, RoleController, UserController],
  providers: [AuthService, RoleService, UserService],
})
export class AuthSvcModule {}
