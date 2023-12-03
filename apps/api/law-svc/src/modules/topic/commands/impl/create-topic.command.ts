import { CreateTopicDto } from '../../dto';

export class CreateTopicCommand {
  constructor(public readonly topic: CreateTopicDto) {}
}
