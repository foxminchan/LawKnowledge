import { ApiProperty } from '@nestjs/swagger';

export class LoginPayload {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class RegisterPayload {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  card: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  password: string;
}
