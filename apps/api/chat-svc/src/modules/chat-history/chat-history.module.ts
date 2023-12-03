import {
  CreateChatHistoryCommandHandler,
  DeleteChatHistoryCommandHandler,
  UpdateChatHistoryCommandHandler,
} from './commands';
import {
  GetChatHistoryQueryHandler,
  GetChatHistoriesQueryHandler,
  GetChatHistoriesByUserQueryHandler,
} from './queries';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ChatHistoryController } from './chat-history.controller';

const CommandHandlers = [
  CreateChatHistoryCommandHandler,
  DeleteChatHistoryCommandHandler,
  UpdateChatHistoryCommandHandler,
];

const QueryHandlers = [
  GetChatHistoryQueryHandler,
  GetChatHistoriesQueryHandler,
  GetChatHistoriesByUserQueryHandler,
];

@Module({
  imports: [CqrsModule],
  controllers: [ChatHistoryController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class ChatHistoryModule {}
