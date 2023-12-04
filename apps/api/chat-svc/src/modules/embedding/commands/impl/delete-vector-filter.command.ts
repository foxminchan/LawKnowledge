import { FilterDto } from '../../dto';
import { ICommand } from '@nestjs/cqrs';

export class DeleteVectorFilterCommand implements ICommand {
  constructor(public readonly filters: FilterDto) {}
}
