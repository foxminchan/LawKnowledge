import { CreateHeadingDto } from '../../dto';

export class CreateHeadingCommand {
  constructor(public readonly heading: CreateHeadingDto) {}
}
