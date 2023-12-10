import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT_ALGORITHM, JWT_SECRET } from '../@types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
      algorithms: [JWT_ALGORITHM],
    });
  }

  async validate(payload: { id: string; username: string }): Promise<{
    userId: string;
    username: string;
  }> {
    return { userId: payload.id, username: payload.username };
  }
}
