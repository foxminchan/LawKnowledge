import { ICommand } from "@nestjs/cqrs";

export class DeleteVectorCommand implements ICommand {
  constructor(public readonly ids: string[]) {}
}
