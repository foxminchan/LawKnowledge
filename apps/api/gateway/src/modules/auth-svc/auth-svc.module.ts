/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { join } from 'path';
import { configs } from '../../configs';
import { Module } from '@nestjs/common';
import { AuthService } from './auth-svc.service';
import { AuthController } from './auth-svc.controller';
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
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthSvcModule {}
