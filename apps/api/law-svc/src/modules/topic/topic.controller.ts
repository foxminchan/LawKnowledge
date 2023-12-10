import {
  CreateTopicCommand,
  DeleteTopicCommand,
  UpdateTopicCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { CreateTopicDto, UpdateTopicDto } from './dto';
import { Criteria } from '@law-knowledge/building-block';
import { GetTopicQuery, GetTopicsQuery } from './queries';

@Controller()
export class TopicController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @EventPattern({ cmd: 'createTopic' })
  createTopic(data: CreateTopicDto) {
    return this.commandBus.execute(new CreateTopicCommand(data));
  }

  @EventPattern({ cmd: 'updateTopic' })
  updateTopic(id: string, data: UpdateTopicDto) {
    return this.commandBus.execute(new UpdateTopicCommand(data));
  }

  @EventPattern({ cmd: 'deleteTopic' })
  deleteTopic(id: string) {
    return this.commandBus.execute(new DeleteTopicCommand(id));
  }

  @EventPattern({ cmd: 'getTopics' })
  getTopics(criteria?: Criteria) {
    return this.queryBus.execute(new GetTopicsQuery(criteria));
  }

  @EventPattern({ cmd: 'getTopic' })
  getTopic(id: string) {
    return this.queryBus.execute(new GetTopicQuery(id));
  }
}
