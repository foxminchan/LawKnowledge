/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { ClientGrpcProxy } from '@nestjs/microservices';

describe('KeywordClientGrpcProxy', () => {
  let client: ClientGrpcProxy;

  beforeEach(async () => {
    client = new ClientGrpcProxy({
      protoPath: join(__dirname, '../proto/keyword.test.proto'),
      package: 'keyword.test',
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        includeDirs: [join(__dirname, '../proto')],
      },
    });
  });

  describe('createKeyword', () => {
    describe('when createKeyword is called', () => {
      it('should return an Keyword', async () => {
        const result = await client
          .getService<any>('KeywordService')
          .createKeyword({
            name: 'Hiến pháp',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          codification_id: expect.any(String || null),
        });
      });
    });
  });

  describe('updateKeyword', () => {
    describe('when updateKeyword is called', () => {
      it('should return an Keyword', async () => {
        const result = await client
          .getService<any>('KeywordService')
          .updateKeyword({
            id: '',
            name: 'Công văn',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          codification_id: expect.any(String || null),
        });
      });
    });
  });

  describe('deleteKeyword', () => {
    describe('when deleteKeyword is called', () => {
      it('should return an Keyword', async () => {
        const result = await client
          .getService<any>('KeywordService')
          .deleteKeyword({
            id: '',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          codification_id: expect.any(String || null),
        });
      });
    });
  });

  describe('getKeyword', () => {
    describe('when getKeyword is called', () => {
      it('should return an Keyword', async () => {
        const result = await client
          .getService<any>('KeywordService')
          .getKeyword({
            id: '',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          codification_id: expect.any(String || null),
        });
      });
    });
  });

  describe('getKeywords', () => {
    describe('when getKeywords is called', () => {
      it('should return an array of Keyword', async () => {
        const result = await client
          .getService<any>('KeywordService')
          .getKeywords({
            page: 1,
            limit: 10,
          });
        expect(result).toEqual({
          keywords: expect.any(Array),
        });
      });
    });
  });
});
