import { UpdateRoleDto } from '../../dto';

export class UpdateRoleCommand {
  constructor(public readonly role: UpdateRoleDto) {}
}
