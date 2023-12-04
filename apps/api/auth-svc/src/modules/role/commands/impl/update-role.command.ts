import { ICommand } from '@nestjs/cqrs';
import { UpdateRoleDto } from '../../dto';

export class UpdateRoleCommand implements ICommand {
  constructor(public readonly role: UpdateRoleDto) {}
}
