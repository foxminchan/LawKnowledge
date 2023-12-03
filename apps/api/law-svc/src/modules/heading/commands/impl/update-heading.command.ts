import { UpdateHeadingDto } from '../../dto';

export class UpdateHeadingCommand {
  constructor(public readonly heading: UpdateHeadingDto) {}
}
