/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { SetMetadata } from '@nestjs/common';
import { IGNORE_CACHING_META } from '../@types/constants';

export const NoCache = () => SetMetadata(IGNORE_CACHING_META, true);
