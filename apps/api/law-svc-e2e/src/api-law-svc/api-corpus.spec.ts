/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { ClientGrpcProxy } from '@nestjs/microservices';

describe('CorpusClientGrpcProxy', () => {
  let client: ClientGrpcProxy;

  beforeEach(async () => {
    client = new ClientGrpcProxy({
      protoPath: join(__dirname, '../proto/corpus.test.proto'),
      package: 'corpus.test',
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        includeDirs: [join(__dirname, '../proto')],
      },
    });
  });

  describe('createCorpus', () => {
    describe('when createCorpus is called', () => {
      it('should return an Corpus', async () => {
        const result = await client
          .getService<any>('CorpusService')
          .createCorpus({
            name: 'Điều 1: Luật hành chính',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          indexing: expect.any(String || null),
          parent_id: expect.any(String || null),
          related_id: expect.any(String || null),
          codification_id: expect.any(String || null),
        });
      });
    });
  });

  describe('updateCorpus', () => {
    describe('when updateCorpus is called', () => {
      it('should return an Corpus', async () => {
        const result = await client
          .getService<any>('CorpusService')
          .updateCorpus({
            id: '',
            name: 'Điều 1: Luật hành chính dân sự',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          indexing: expect.any(String || null),
          parent_id: expect.any(String || null),
          related_id: expect.any(String || null),
          codification_id: expect.any(String || null),
        });
      });
    });
  });

  describe('deleteCorpus', () => {
    describe('when deleteCorpus is called', () => {
      it('should return an Corpus', async () => {
        const result = await client
          .getService<any>('CorpusService')
          .deleteCorpus({
            id: '',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          indexing: expect.any(String || null),
          parent_id: expect.any(String || null),
          related_id: expect.any(String || null),
          codification_id: expect.any(String || null),
        });
      });
    });
  });

  describe('getCorpus', () => {
    describe('when getCorpus is called', () => {
      it('should return an Corpus', async () => {
        const result = await client.getService<any>('CorpusService').getCorpus({
          id: '',
        });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          indexing: expect.any(String || null),
          parent_id: expect.any(String || null),
          related_id: expect.any(String || null),
          codification_id: expect.any(String || null),
        });
      });
    });
  });

  describe('getCorpusTree', () => {
    describe('when getCorpusTree is called', () => {
      it('should return an Corpus', async () => {
        const result = await client
          .getService<any>('CorpusService')
          .getCorpuses({
            page: 1,
            limit: 10,
          });
        expect(result).toEqual({
          corpuses: expect.any(Array),
        });
      });
    });
  });
});
