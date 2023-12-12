import { injectable } from 'inversify';
import { jwtDecode } from 'jwt-decode';
import { ITokenService } from '@common/interfaces/interfaces';

@injectable()
export default class TokenService implements ITokenService {
  decodeToken(token: string) {
    return jwtDecode(token);
  }
}
