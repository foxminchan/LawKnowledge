import {
  Injectable,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user';
import { JwtService } from '@nestjs/jwt';
import { CryptoUtils } from '@law-knowledge/shared';
import { from, of, switchMap, throwError } from 'rxjs';
import { AccessToken, JwtPayload, LoginPayload } from '../../@types';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  validateUser(user: LoginPayload) {
    return from(this.userService.getUser(user.email)).pipe(
      switchMap((res) => {
        if (!res)
          return throwError(
            () => new ForbiddenException('Tài khoản của bạn không tồn tại')
          );

        return from(CryptoUtils.verifyHash(res.password, user.password)).pipe(
          switchMap((isValid) => {
            return isValid
              ? of(res)
              : throwError(
                  () =>
                    new UnauthorizedException(
                      'Tên đăng nhập hoặc mật khẩu không hợp lệ'
                    )
                );
          })
        );
      })
    );
  }

  login(user: LoginPayload) {
    return this.validateUser(user).pipe(
      switchMap((res) => {
        if (!res) throw new UnauthorizedException();

        const token: JwtPayload = {
          sub: res.id,
          name: res.name,
          email: res.email,
          roles: res.UserRoles.map((role) => role.role_id),
        };

        return of({
          access_token: this.jwtService.sign(token),
        } as AccessToken);
      })
    );
  }
}
