/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/db-law';

@Injectable()
export class LawDataService extends PrismaClient {}
