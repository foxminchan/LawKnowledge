/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { INestApplication, Logger } from '@nestjs/common';

export const AppUtils = {
  gracefulShutdown(app: INestApplication, code: string): void {
    setTimeout(() => process.exit(1), 5000);
    Logger.verbose(`Signal received with code ${code} ⚡.`);
    Logger.log('❗Closing http server with grace.');
    app
      .close()
      .then(() => {
        Logger.log('✅ Http server closed.');
        process.exit(0);
      })
      .catch((error) => {
        Logger.error(`❌ Http server closed with error: ${error}`);
        process.exit(1);
      });
  },

  processAppWithGrace(app: INestApplication): void {
    process.on('SIGINT', () => {
      AppUtils.gracefulShutdown(app, 'SIGINT');
    });
  },
};
