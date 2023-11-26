import { ApiProperty } from '@nestjs/swagger';

export class LoginPayload {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
