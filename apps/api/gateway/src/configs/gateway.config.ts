/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const gatewayConfigSchema = {
  PORT: Joi.number().default(8080).description('Port to listen on'),
  REDIS_URL: Joi.string()
    .default('redis://localhost:6379')
    .description('Redis connection string'),
  AUTH_SVC_HOST: Joi.string()
    .default('localhost')
    .description('Auth service host'),
  AUTH_SVC_PORT: Joi.number().default(8081).description('Auth service port'),
  LAW_SVC_HOST: Joi.string()
    .default('localhost')
    .description('Law service host'),
  LAW_SVC_PORT: Joi.number().default(8082).description('Law service port'),
  SEARCH_SVC_HOST: Joi.string()
    .default('localhost')
    .description('Search service host'),
  SEARCH_SVC_PORT: Joi.number()
    .default(8083)
    .description('Search service port'),
  CHAT_SVC_HOST: Joi.string()
    .default('localhost')
    .description('Chat service host'),
  CHAT_SVC_PORT: Joi.number().default(8084).description('Chat service port'),
};

export const configs = registerAs('configs', () => ({
  port: process.env.PORT,
  redisUrl: process.env.REDIS_URL,
  authSvcHost: process.env.AUTH_SVC_HOST,
  authSvcPort: process.env.AUTH_SVC_PORT,
  lawSvcHost: process.env.LAW_SVC_HOST,
  lawSvcPort: process.env.LAW_SVC_PORT,
  searchSvcHost: process.env.SEARCH_SVC_HOST,
  searchSvcPort: process.env.SEARCH_SVC_PORT,
  chatSvcHost: process.env.CHAT_SVC_HOST,
  chatSvcPort: process.env.CHAT_SVC_PORT,
}));
