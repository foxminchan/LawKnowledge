export class JwtDto {
  sub: string;
  name: string;
  email: string;
  roles: string[];
}

export class TokenDto {
  access_token: string;
  refresh_token: string;
}
