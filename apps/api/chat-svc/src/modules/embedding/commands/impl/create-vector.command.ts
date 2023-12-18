import { ICommand } from '@nestjs/cqrs';

export class CreateVectorCommand implements ICommand {
  constructor(public readonly path: string) {}
}
