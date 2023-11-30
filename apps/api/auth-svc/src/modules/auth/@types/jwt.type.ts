export class JwtPayload {
  sub: string;
  name: string;
  email: string;
  roles: string[];
}

export class Token {
  access_token: string;
  refresh_token: string;
}
