import { ICommand } from "@nestjs/cqrs";

export class DeleteTopicCommand implements ICommand {
  constructor(public readonly id: string) {}
}
