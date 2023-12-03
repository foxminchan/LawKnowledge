import { LoginDto } from '../../dto';

export class CreateTokenCommand {
  constructor(public readonly payload: LoginDto) {}
}
