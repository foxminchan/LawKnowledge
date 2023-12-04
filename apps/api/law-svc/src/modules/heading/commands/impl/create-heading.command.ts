import { ICommand } from '@nestjs/cqrs';
import { CreateHeadingDto } from '../../dto';

export class CreateHeadingCommand implements ICommand {
  constructor(public readonly heading: CreateHeadingDto) {}
}
