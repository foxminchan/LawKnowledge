import {
  GetTopicQueryHandler,
  GetTopicsQueryHandler,
  CreateTopicCommandHandler,
  DeleteTopicCommandHandler,
  UpdateTopicCommandHandler,
} from './cqrs';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TopicController } from './topic.controller';

const CommandHandlers = [
  CreateTopicCommandHandler,
  DeleteTopicCommandHandler,
  UpdateTopicCommandHandler,
];

const QueryHandlers = [GetTopicQueryHandler, GetTopicsQueryHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...QueryHandlers],
  controllers: [TopicController],
})
export class TopicModule {}
