import { ICommand } from "@nestjs/cqrs";

export class DeleteRoleCommand implements ICommand {
  constructor(public readonly id: string) {}
}
