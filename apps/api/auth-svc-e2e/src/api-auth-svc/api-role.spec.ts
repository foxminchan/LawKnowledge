/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { Roles } from '@law-knowledge/building-block';

describe('RoleClientGrpcProxy', () => {
  let client: ClientGrpcProxy;

  beforeEach(async () => {
    client = new ClientGrpcProxy({
      protoPath: join(__dirname, '../proto/role.test.proto'),
      package: 'role.test',
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        includeDirs: [join(__dirname, '../proto')],
      },
    });
  });

  describe('createRole', () => {
    describe('when createRole is called', () => {
      it('should return an role', async () => {
        const result = await client.getService<any>('RoleService').createRole({
          name: Roles.ADMIN,
        });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
        });
      });
    });
  });

  describe('updateRole', () => {
    describe('when updateRole is called', () => {
      it('should return an role', async () => {
        const result = await client.getService<any>('RoleService').updateRole({
          id: '5f92cbf10cf217478ba93561',
          name: Roles.LAWYER,
        });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
        });
      });
    });
  });

  describe('deleteRole', () => {
    describe('when deleteRole is called', () => {
      it('should return an role', async () => {
        const result = await client.getService<any>('RoleService').deleteRole({
          id: '5f92cbf10cf217478ba93561',
        });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
        });
      });
    });
  });

  describe('getRole', () => {
    describe('when getRole is called', () => {
      it('should return an role', async () => {
        const result = await client.getService<any>('RoleService').getRole({
          id: '5f92cbf10cf217478ba93561',
        });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
        });
      });
    });
  });

  describe('getRoles', () => {
    describe('when getRoles is called', () => {
      it('should return an array of role', async () => {
        const result = await client.getService<any>('RoleService').getRoles();
        expect(result).toEqual([
          {
            id: expect.any(String),
            name: expect.any(String),
          },
        ]);
      });
    });
  });
});
