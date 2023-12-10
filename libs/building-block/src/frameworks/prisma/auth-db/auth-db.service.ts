import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/db-auth';

@Injectable()
export class AuthDataService extends PrismaClient {}
