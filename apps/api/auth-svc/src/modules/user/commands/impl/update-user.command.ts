import { UpdateUserDto } from '../../dto';

export class UpdateUserCommand {
  constructor(public readonly user: UpdateUserDto) {}
}
