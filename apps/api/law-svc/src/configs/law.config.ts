/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const lawConfigSchema = {
  DATABASE_URL: Joi.string()
    .required()
    .description('Database connection string'),
  URL: Joi.string().required().description('Law service url'),
  PORT: Joi.number().default(8081).description('Port to listen on'),
};

export const configs = registerAs('configs', () => ({
  db: process.env.DATABASE_URL,
  url: process.env.URL,
  port: process.env.PORT,
}));
