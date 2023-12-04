import { ICommand } from '@nestjs/cqrs';

export class DeleteHeadingCommand implements ICommand {
  constructor(public readonly id: string) {}
}
