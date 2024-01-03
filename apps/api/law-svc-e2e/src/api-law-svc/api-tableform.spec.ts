/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { TableFormType } from '@law-knowledge/building-block';

describe('TableFormClientGrpcProxy', () => {
  let client: ClientGrpcProxy;

  beforeEach(async () => {
    client = new ClientGrpcProxy({
      protoPath: join(__dirname, '../proto/tableform.test.proto'),
      package: 'tableform.test',
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        includeDirs: [join(__dirname, '../proto')],
      },
    });
  });

  describe('createTableForm', () => {
    describe('when createTableForm is called', () => {
      it('should return an TableForm', async () => {
        const result = await client
          .getService<any>('TableFormService')
          .createTableForm({
            name: 'Mẫu đơn ly hôn',
            type: TableFormType.FORM,
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          type: expect.any(String || null),
          codification_id: expect.any(String || null),
          corpus_id: expect.any(String || null),
        });
      });
    });
  });

  describe('updateTableForm', () => {
    describe('when updateTableForm is called', () => {
      it('should return an TableForm', async () => {
        const result = await client
          .getService<any>('TableFormService')
          .updateTableForm({
            id: '',
            name: 'Mẫu đơn kết hôn',
            type: TableFormType.FORM,
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          type: expect.any(String || null),
          codification_id: expect.any(String || null),
          corpus_id: expect.any(String || null),
        });
      });
    });
  });

  describe('deleteTableForm', () => {
    describe('when deleteTableForm is called', () => {
      it('should return an TableForm', async () => {
        const result = await client
          .getService<any>('TableFormService')
          .deleteTableForm({
            id: '',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          type: expect.any(String || null),
          codification_id: expect.any(String || null),
          corpus_id: expect.any(String || null),
        });
      });
    });
  });

  describe('getTableForm', () => {
    describe('when getTableForm is called', () => {
      it('should return an TableForm', async () => {
        const result = await client
          .getService<any>('TableFormService')
          .getTableForm({
            id: '',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          type: expect.any(String || null),
          codification_id: expect.any(String || null),
          corpus_id: expect.any(String || null),
        });
      });
    });
  });

  describe('getTableForms', () => {
    describe('when getTableForms is called', () => {
      it('should return an array of TableForm', async () => {
        const result = await client
          .getService<any>('TableFormService')
          .getTableForms({
            page: 1,
            limit: 10,
          });
        expect(result).toEqual({
          tableForms: expect.any(Array),
        });
      });
    });
  });
});
