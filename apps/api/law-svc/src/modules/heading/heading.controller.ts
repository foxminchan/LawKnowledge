import {
  GetHeadingEvent,
  GetHeadingsEvent,
  CreateHeadingEvent,
  DeleteHeadingEvent,
  UpdateHeadingEvent,
} from './cqrs';
import { Controller } from '@nestjs/common';
import { Criteria } from '@law-knowledge/shared';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { CreateHeadingModel, UpdateHeadingModel } from '../../models';

@Controller()
export class HeadingController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @EventPattern({ cmd: 'getHeadings' })
  getHeadings(criteria?: Criteria) {
    return this.queryBus.execute(new GetHeadingsEvent(criteria));
  }

  @EventPattern({ cmd: 'getHeading' })
  getHeading(id: string) {
    return this.queryBus.execute(new GetHeadingEvent(id));
  }

  @EventPattern({ cmd: 'createHeading' })
  createHeading(payload: CreateHeadingModel) {
    return this.commandBus.execute(new CreateHeadingEvent(payload));
  }

  @EventPattern({ cmd: 'updateHeading' })
  updateHeading(id: string, payload: UpdateHeadingModel) {
    return this.commandBus.execute(new UpdateHeadingEvent(id, payload));
  }

  @EventPattern({ cmd: 'deleteHeading' })
  deleteHeading(id: string) {
    return this.commandBus.execute(new DeleteHeadingEvent(id));
  }
}
