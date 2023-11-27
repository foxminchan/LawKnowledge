import { JwtService } from '@nestjs/jwt';
import { CryptoUtils } from '@law-knowledge/shared';
import { RpcException } from '@nestjs/microservices';
import { from, of, switchMap, throwError } from 'rxjs';
import { DataService } from '@law-knowledge/framework';
import { CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import { CreateTokenEvent } from '../events/create-token.event';
import { AccessToken, JwtPayload, LoginPayload } from '../../@types';
import { ForbiddenException, UnauthorizedException } from '@nestjs/common';

@CommandHandler(CreateTokenEvent)
export class CreateTokenCommandHandler
  implements ICommandHandler<CreateTokenEvent>
{
  constructor(
    private jwtService: JwtService,
    private dataService: DataService
  ) {}

  private validateUser(user: LoginPayload) {
    return from(
      this.dataService.user.findUnique({
        where: {
          email: user.email,
        },
        include: {
          UserRoles: true,
        },
      })
    ).pipe(
      switchMap((res) => {
        if (!res)
          return throwError(
            () =>
              new RpcException(
                new ForbiddenException('Tài khoản của bạn không tồn tại')
              )
          );

        return from(CryptoUtils.verifyHash(res.password, user.password)).pipe(
          switchMap((isValid) => {
            return isValid
              ? of(res)
              : throwError(
                  () =>
                    new RpcException(
                      new UnauthorizedException(
                        'Tên đăng nhập hoặc mật khẩu không hợp lệ'
                      )
                    )
                );
          })
        );
      })
    );
  }

  async execute(command: CreateTokenEvent) {
    return this.validateUser(command.payload).pipe(
      switchMap((res) => {
        if (!res) throw new RpcException(new UnauthorizedException());

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
