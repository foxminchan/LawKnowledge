/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Global, Module } from '@nestjs/common';
import { AuthDataService } from './auth-db.service';

@Global()
@Module({
  providers: [AuthDataService],
  exports: [AuthDataService],
})
export class AuthDataModule {}
