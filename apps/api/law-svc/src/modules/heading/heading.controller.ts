import {
  CreateHeadingCommand,
  DeleteHeadingCommand,
  UpdateHeadingCommand,
} from './commands';
import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { Criteria } from '@law-knowledge/building-block';
import { CreateHeadingDto, UpdateHeadingDto } from './dto';
import { GetHeadingQuery, GetHeadingsQuery } from './queries';

@Controller()
export class HeadingController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @EventPattern({ cmd: 'getHeadings' })
  getHeadings(criteria?: Criteria) {
    return this.queryBus.execute(new GetHeadingsQuery(criteria));
  }

  @EventPattern({ cmd: 'getHeading' })
  getHeading(id: string) {
    return this.queryBus.execute(new GetHeadingQuery(id));
  }

  @EventPattern({ cmd: 'createHeading' })
  createHeading(payload: CreateHeadingDto) {
    return this.commandBus.execute(new CreateHeadingCommand(payload));
  }

  @EventPattern({ cmd: 'updateHeading' })
  updateHeading(id: string, payload: UpdateHeadingDto) {
    return this.commandBus.execute(new UpdateHeadingCommand(payload));
  }

  @EventPattern({ cmd: 'deleteHeading' })
  deleteHeading(id: string) {
    return this.commandBus.execute(new DeleteHeadingCommand(id));
  }
}
