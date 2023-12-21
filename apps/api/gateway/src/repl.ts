/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { join } from 'path';
import { repl } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { existsSync, mkdirSync } from 'fs';

const logger = new Logger('Repl');

async function bootstrap(): Promise<void> {
  const replServer = await repl(AppModule);

  const cacheDir = `${process.cwd()}/node_modules/.cache`;

  if (!existsSync(cacheDir)) mkdirSync(cacheDir);

  replServer.setupHistory(join(cacheDir, '.nestjs_repl_history'), (error) => {
    if (error) logger.error(error);
  });
}

(async () => await bootstrap())();
