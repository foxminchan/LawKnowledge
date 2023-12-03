import { UpdateTopicDto } from '../../dto';

export class UpdateTopicCommand {
  constructor(public readonly topic: UpdateTopicDto) {}
}
