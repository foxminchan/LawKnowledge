/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import {
  IS_PUBLIC_KEY_META,
  SWAGGER_API_SECURITY_KEY_META,
} from '../@types/constants';
import { SetMetadata, applyDecorators } from '@nestjs/common';

const publicAuthMiddleware = SetMetadata(IS_PUBLIC_KEY_META, true);
const publicAuthSwagger = SetMetadata(SWAGGER_API_SECURITY_KEY_META, [
  IS_PUBLIC_KEY_META,
]);

export const Public = () =>
  applyDecorators(publicAuthSwagger, publicAuthMiddleware);
