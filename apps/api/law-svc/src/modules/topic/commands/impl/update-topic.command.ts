import { ICommand } from '@nestjs/cqrs';
import { UpdateTopicDto } from '../../dto';

export class UpdateTopicCommand implements ICommand {
  constructor(public readonly topic: UpdateTopicDto) {}
}
