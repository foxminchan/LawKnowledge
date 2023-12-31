/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/db-auth';

@Injectable()
export class AuthDataService extends PrismaClient {}
