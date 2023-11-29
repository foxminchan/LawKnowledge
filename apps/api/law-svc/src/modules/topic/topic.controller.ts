import {
  GetTopicEvent,
  GetTopicsEvent,
  CreateTopicEvent,
  DeleteTopicEvent,
  UpdateTopicEvent,
} from './cqrs';
import { Controller } from '@nestjs/common';
import { Criteria } from '@law-knowledge/shared';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { CreateTopicModel, UpdateTopicModel } from '../../models';

@Controller()
export class TopicController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @EventPattern({ cmd: 'createTopic' })
  createTopic(data: CreateTopicModel) {
    return this.commandBus.execute(new CreateTopicEvent(data));
  }

  @EventPattern({ cmd: 'updateTopic' })
  updateTopic(id: string, data: UpdateTopicModel) {
    return this.commandBus.execute(new UpdateTopicEvent(id, data));
  }

  @EventPattern({ cmd: 'deleteTopic' })
  deleteTopic(id: string) {
    return this.commandBus.execute(new DeleteTopicEvent(id));
  }

  @EventPattern({ cmd: 'getTopics' })
  getTopics(criteria?: Criteria) {
    return this.queryBus.execute(new GetTopicsEvent(criteria));
  }

  @EventPattern({ cmd: 'getTopic' })
  getTopic(id: string) {
    return this.queryBus.execute(new GetTopicEvent(id));
  }
}
