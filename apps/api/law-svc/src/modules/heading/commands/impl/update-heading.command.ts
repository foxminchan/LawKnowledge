import { ICommand } from '@nestjs/cqrs';
import { UpdateHeadingDto } from '../../dto';

export class UpdateHeadingCommand implements ICommand {
  constructor(public readonly heading: UpdateHeadingDto) {}
}
