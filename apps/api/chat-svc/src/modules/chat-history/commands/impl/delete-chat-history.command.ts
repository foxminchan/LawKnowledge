import { ICommand } from '@nestjs/cqrs';

export class DeleteChatHistoryCommand implements ICommand {
  constructor(public readonly id: string) {}
}
