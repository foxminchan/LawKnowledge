import { ICommand } from '@nestjs/cqrs';
import { UpdateUserDto } from '../../dto';

export class UpdateUserCommand implements ICommand {
  constructor(public readonly user: UpdateUserDto) {}
}
