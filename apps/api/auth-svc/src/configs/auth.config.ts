import Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const authConfigSchema = {
  DATABASE_URL: Joi.string()
    .required()
    .description('Database connection string'),
  URL: Joi.string().required().description('Auth service url'),
  PORT: Joi.number().default(8081).description('Port to listen on'),
  DAPR_URL: Joi.string().required().description('Dapr url'),
  DAPR_PORT: Joi.number().default(3500).description('Dapr port'),
};

export const configs = registerAs('configs', () => ({
  db: process.env.DATABASE_URL,
  url: process.env.URL,
  port: process.env.PORT,
  daprUrl: process.env.DAPR_URL,
  daprPort: process.env.DAPR_PORT,
}));
