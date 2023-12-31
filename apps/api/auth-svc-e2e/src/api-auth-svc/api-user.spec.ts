/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { ClientGrpcProxy } from '@nestjs/microservices';

describe('UserClientGrpcProxy', () => {
  let client: ClientGrpcProxy;

  beforeEach(async () => {
    client = new ClientGrpcProxy({
      protoPath: join(__dirname, '../proto/user.test.proto'),
      package: 'user.test',
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        includeDirs: [join(__dirname, '../proto')],
      },
    });
  });

  describe('createUser', () => {
    describe('when createUser is called', () => {
      it('should return an user', async () => {
        const result = await client.getService<any>('UserService').createUser({
          name: 'Nguyễn Xuân Nhân',
          email: 'nhan@gmail.com',
          phone: '0123456789',
          card: '123456789',
          address: 'Hồ Chí Minh',
          password: process.env.PASSWORD,
          repassword: process.env.PASSWORD,
        });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          email: expect.any(String),
          phone: expect.any(String),
          card: expect.any(String),
          address: expect.any(String),
          password: expect.any(String),
        });
      });
    });
  });

  describe('updateUser', () => {
    describe('when updateUser is called', () => {
      it('should return an user', async () => {
        const result = await client.getService<any>('UserService').updateUser({
          id: '5f92cbf10cf217478ba93561',
          name: 'Nguyễn Xuân Nhân',
          email: 'nhan@gmail.com',
          phone: '9876543210',
          card: '123456789',
          address: 'Hồ Chí Minh',
          password: process.env.PASSWORD,
          repassword: process.env.PASSWORD,
        });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          email: expect.any(String),
          phone: expect.any(String),
          card: expect.any(String),
          address: expect.any(String),
          password: expect.any(String),
        });
      });
    });
  });

  describe('deleteUser', () => {
    describe('when deleteUser is called', () => {
      it('should return an user', async () => {
        const result = await client.getService<any>('UserService').deleteUser({
          id: '5f92cbf10cf217478ba93561',
        });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          email: expect.any(String),
          phone: expect.any(String),
          card: expect.any(String),
          address: expect.any(String),
          password: expect.any(String),
        });
      });
    });
  });

  describe('getUser', () => {
    describe('when getUser is called', () => {
      it('should return an user', async () => {
        const result = await client.getService<any>('UserService').getUser({
          id: '5f92cbf10cf217478ba93561',
        });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          email: expect.any(String),
          phone: expect.any(String),
          card: expect.any(String),
          address: expect.any(String),
          password: expect.any(String),
        });
      });
    });
  });

  describe('getUsers', () => {
    describe('when getUsers is called', () => {
      it('should return an array of user', async () => {
        const result = await client.getService<any>('UserService').getUsers();
        expect(result).toEqual([
          {
            id: expect.any(String),
            name: expect.any(String),
            email: expect.any(String),
            phone: expect.any(String),
            card: expect.any(String),
            address: expect.any(String),
            password: expect.any(String),
          },
        ]);
      });
    });
  });
});
