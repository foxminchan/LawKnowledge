import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/db-law';

@Injectable()
export class LawDataService extends PrismaClient {}
