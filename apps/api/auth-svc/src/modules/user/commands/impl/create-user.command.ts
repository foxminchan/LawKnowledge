import { ICommand } from '@nestjs/cqrs';
import { CreateUserDto } from '../../dto';

export class CreateUserCommand implements ICommand {
  constructor(public readonly user: CreateUserDto) {}
}
