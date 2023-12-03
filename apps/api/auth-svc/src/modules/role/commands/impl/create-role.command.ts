import { CreateRoleDto } from '../../dto';

export class CreateRoleCommand {
  constructor(public readonly role: CreateRoleDto) {}
}
