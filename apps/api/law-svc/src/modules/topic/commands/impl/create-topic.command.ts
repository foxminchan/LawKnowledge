import { ICommand } from '@nestjs/cqrs';
import { CreateTopicDto } from '../../dto';

export class CreateTopicCommand implements ICommand {
  constructor(public readonly topic: CreateTopicDto) {}
}
