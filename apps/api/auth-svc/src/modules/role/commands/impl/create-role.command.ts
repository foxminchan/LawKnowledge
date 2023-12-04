import { ICommand } from '@nestjs/cqrs';
import { CreateRoleDto } from '../../dto';

export class CreateRoleCommand implements ICommand {
  constructor(public readonly role: CreateRoleDto) {}
}
