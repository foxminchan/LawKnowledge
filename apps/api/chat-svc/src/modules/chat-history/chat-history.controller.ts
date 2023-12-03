import {
  GetChatHistoryEvent,
  GetChatHistoriesEvent,
  CreateChatHistoryEvent,
  UpdateChatHistoryEvent,
  DeleteChatHistoryEvent,
  GetChatHistoriesByUserEvent,
} from './cqrs';
import { Controller } from '@nestjs/common';
import { Criteria } from '@law-knowledge/shared';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { CreateChatHistoryModel, UpdateChatHistoryModel } from '../../models';

@Controller()
export class ChatHistoryController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @EventPattern('getChatHistory')
  getChatHistory(id: string) {
    return this.queryBus.execute(new GetChatHistoryEvent(id));
  }

  @EventPattern('getChatHistories')
  getChatHistories(criteria?: Criteria) {
    return this.queryBus.execute(new GetChatHistoriesEvent(criteria));
  }

  @EventPattern('getChatHistoriesByUser')
  getChatHistoriesByUser(user_id: string, criteria?: Criteria) {
    return this.queryBus.execute(
      new GetChatHistoriesByUserEvent(user_id, criteria)
    );
  }

  @EventPattern('createChatHistory')
  createChatHistory(payload: CreateChatHistoryModel) {
    return this.commandBus.execute(new CreateChatHistoryEvent(payload));
  }

  @EventPattern('updateChatHistory')
  updateChatHistory(id: string, payload: UpdateChatHistoryModel) {
    return this.commandBus.execute(new UpdateChatHistoryEvent(id, payload));
  }

  @EventPattern('deleteChatHistory')
  deleteChatHistory(id: string) {
    return this.commandBus.execute(new DeleteChatHistoryEvent(id));
  }
}
