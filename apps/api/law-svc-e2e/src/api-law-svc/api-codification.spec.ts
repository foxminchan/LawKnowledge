/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { ClientGrpcProxy } from '@nestjs/microservices';

describe('CodificationClientGrpcProxy', () => {
  let client: ClientGrpcProxy;

  beforeEach(async () => {
    client = new ClientGrpcProxy({
      protoPath: join(__dirname, '../proto/codification.test.proto'),
      package: 'codification.test',
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        includeDirs: [join(__dirname, '../proto')],
      },
    });
  });

  describe('createCodification', () => {
    describe('when createCodification is called', () => {
      it('should return an Codification', async () => {
        const result = await client
          .getService<any>('CodificationService')
          .createCodification({
            name: 'Điều 1: Bộ luật dân sự',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          indexing: expect.any(String || null),
          parent_id: expect.any(String || null),
        });
      });
    });
  });

  describe('updateCodification', () => {
    describe('when updateCodification is called', () => {
      it('should return an Codification', async () => {
        const result = await client
          .getService<any>('CodificationService')
          .updateCodification({
            id: '',
            name: 'Điều 1: Bộ luật dân sự',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          indexing: expect.any(String || null),
          parent_id: expect.any(String || null),
        });
      });
    });
  });

  describe('deleteCodification', () => {
    describe('when deleteCodification is called', () => {
      it('should return an Codification', async () => {
        const result = await client
          .getService<any>('CodificationService')
          .deleteCodification({
            id: '',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          indexing: expect.any(String || null),
          parent_id: expect.any(String || null),
        });
      });
    });
  });

  describe('getCodification', () => {
    describe('when getCodification is called', () => {
      it('should return an Codification', async () => {
        const result = await client
          .getService<any>('CodificationService')
          .getCodification({
            id: '',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          indexing: expect.any(String || null),
          parent_id: expect.any(String || null),
        });
      });
    });
  });

  describe('getCodifications', () => {
    describe('when getCodifications is called', () => {
      it('should return an Codification', async () => {
        const result = await client
          .getService<any>('CodificationService')
          .getCodifications({
            page: 1,
            limit: 10,
          });
        expect(result).toEqual({
          codifications: expect.any(Array),
        });
      });
    });
  });
});
