import {
  GetChatHistoryQuery,
  GetChatHistoriesQuery,
  GetChatHistoriesByUserQuery,
} from './queries';
import {
  CreateChatHistoryCommand,
  DeleteChatHistoryCommand,
  UpdateChatHistoryCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { Criteria } from '@law-knowledge/building-block';
import { CreateChatHistoryDto, UpdateChatHistoryDto } from './dto';

@Controller()
export class ChatHistoryController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @EventPattern('getChatHistory')
  getChatHistory(id: string) {
    return this.queryBus.execute(new GetChatHistoryQuery(id));
  }

  @EventPattern('getChatHistories')
  getChatHistories(criteria?: Criteria) {
    return this.queryBus.execute(new GetChatHistoriesQuery(criteria));
  }

  @EventPattern('getChatHistoriesByUser')
  getChatHistoriesByUser(user_id: string, criteria?: Criteria) {
    return this.queryBus.execute(
      new GetChatHistoriesByUserQuery(user_id, criteria),
    );
  }

  @EventPattern('createChatHistory')
  createChatHistory(payload: CreateChatHistoryDto) {
    return this.commandBus.execute(new CreateChatHistoryCommand(payload));
  }

  @EventPattern('updateChatHistory')
  updateChatHistory(payload: UpdateChatHistoryDto) {
    return this.commandBus.execute(new UpdateChatHistoryCommand(payload));
  }

  @EventPattern('deleteChatHistory')
  deleteChatHistory(id: string) {
    return this.commandBus.execute(new DeleteChatHistoryCommand(id));
  }
}
