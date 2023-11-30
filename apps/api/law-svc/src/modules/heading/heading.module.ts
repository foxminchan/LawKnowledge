import {
  GetHeadingQueryHandler,
  GetHeadingsQueryHandler,
  CreateHeadingCommandHandler,
  DeleteHeadingCommandHandler,
  UpdateHeadingCommandHandler,
} from './cqrs';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HeadingController } from './heading.controller';

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
