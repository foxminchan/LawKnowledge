/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Global, Module } from '@nestjs/common';
import { LawDataService } from './law-db.service';

@Global()
@Module({
  providers: [LawDataService],
  exports: [LawDataService],
})
export class LawDataModule {}
