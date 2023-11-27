export class JwtPayload {
  sub: string;
  name: string;
  email: string;
  roles: string[];
}

export class AccessToken {
  access_token: string;
}
