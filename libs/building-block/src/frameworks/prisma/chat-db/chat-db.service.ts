import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/db-chat';

@Injectable()
export class ChatDataService extends PrismaClient {}
