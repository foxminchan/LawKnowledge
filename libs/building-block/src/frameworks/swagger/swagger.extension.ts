/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  LICENSE,
  SWAGGER_TITLE,
  SWAGGER_VERSION,
  IS_PUBLIC_KEY_META,
  SWAGGER_DESCRIPTION,
} from '../../libs';
import { isArray } from 'helper-fns';
import { getMiddleware } from 'swagger-stats';
import { INestApplication } from '@nestjs/common';
import { swaggerOptions } from './swagger.plugin';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function SetupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion(SWAGGER_VERSION)
    .setLicense(LICENSE.NAME, LICENSE.URL)
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      description: 'Enter your JWT token to access this endpoint',
    })
    .addApiKey(
      {
        type: 'apiKey',
        in: 'header',
        name: 'X-Api-Key',
        description: 'Enter your API key to access this endpoint',
      },
      'X-Api-Key',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const paths = Object.values(document.paths);

  for (const path of paths) {
    const methods = Object.values(path);

    for (const method of methods) {
      if (
        isArray(method.security) &&
        method.security.includes(IS_PUBLIC_KEY_META)
      )
        method.security = [];
    }
  }

  app.use(
    getMiddleware({
      swaggerSpec: document,
      authentication: true,
      uriPath: '/stats',
    }),
  );

  SwaggerModule.setup('/', app, document, {
    swaggerOptions,
  });
}
