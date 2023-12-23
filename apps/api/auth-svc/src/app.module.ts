/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Module } from '@nestjs/common';
import { NestConfigModule } from './configs';
import { AuthDataModule, LoggerModule } from '@law-knowledge/building-block';
import { AuthModule, RoleModule, UserModule } from './modules';

@Module({
  imports: [
    AuthModule,
    UserModule,
    RoleModule,
    LoggerModule,
    AuthDataModule,
    NestConfigModule,
  ],
})
export class AppModule {}
