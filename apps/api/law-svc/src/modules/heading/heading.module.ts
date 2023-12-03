import {
  CreateHeadingCommandHandler,
  DeleteHeadingCommandHandler,
  UpdateHeadingCommandHandler,
} from './commands';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HeadingController } from './heading.controller';
import { GetHeadingQueryHandler, GetHeadingsQueryHandler } from './queries';

const CommandHandlers = [
  CreateHeadingCommandHandler,
  UpdateHeadingCommandHandler,
  DeleteHeadingCommandHandler,
];

const QueryHandlers = [GetHeadingQueryHandler, GetHeadingsQueryHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...QueryHandlers],
  controllers: [HeadingController],
})
export class HeadingModule {}
