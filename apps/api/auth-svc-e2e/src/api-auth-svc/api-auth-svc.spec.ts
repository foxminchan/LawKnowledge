/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { UnauthorizedException } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';

describe('AuthClientGrpcProxy', () => {
  let client: ClientGrpcProxy;

  beforeEach(async () => {
    client = new ClientGrpcProxy({
      protoPath: join(__dirname, '../proto/auth.test.proto'),
      package: 'auth.test',
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        includeDirs: [join(__dirname, '../proto')],
      },
    });
  });

  describe('login', () => {
    describe('when login is called', () => {
      it('should return an access token', async () => {
        const result = await client.getService<any>('AuthService').login({
          username: 'nhan@gmail.com',
          password: process.env.PASSWORD,
        });
        expect(result).toEqual({
          accessToken: expect.any(String),
        });
      });
    });

    describe('when login is called with invalid credentials', () => {
      it('should throw an error', async () => {
        const result = await expect(
          client.getService<any>('AuthService').login({
            username: 'invalid@gmail.com',
            password: process.env.PASSWORD,
          }),
        ).rejects.toThrow();
        expect(result).toThrow(
          new UnauthorizedException('Tài khoản của bạn không tồn tại'),
        );
      });
    });
  });
});
