/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { ClientGrpcProxy } from '@nestjs/microservices';

describe('TopicClientGrpcProxy', () => {
  let client: ClientGrpcProxy;

  beforeEach(async () => {
    client = new ClientGrpcProxy({
      protoPath: join(__dirname, '../proto/topic.test.proto'),
      package: 'topic.test',
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        includeDirs: [join(__dirname, '../proto')],
      },
    });
  });

  describe('createTopic', () => {
    describe('when createTopic is called', () => {
      it('should return an Topic', async () => {
        const result = await client
          .getService<any>('TopicService')
          .createTopic({
            name: 'Tòa án nhân dân',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          no: expect.any(Number || null),
        });
      });
    });
  });

  describe('updateTopic', () => {
    describe('when updateTopic is called', () => {
      it('should return an Topic', async () => {
        const result = await client
          .getService<any>('TopicService')
          .updateTopic({
            id: '',
            name: 'Tòa án nhân dân',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          no: expect.any(Number || null),
        });
      });
    });
  });

  describe('deleteTopic', () => {
    describe('when deleteTopic is called', () => {
      it('should return an Topic', async () => {
        const result = await client
          .getService<any>('TopicService')
          .deleteTopic({
            id: '',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          no: expect.any(Number || null),
        });
      });
    });
  });

  describe('getTopics', () => {
    describe('when findAllTopic is called', () => {
      it('should return an array of Topic', async () => {
        const result = await client.getService<any>('TopicService').getTopics({
          page: 1,
          limit: 10,
        });
        expect(result).toEqual({
          topics: expect.any(Array),
        });
      });
    });
  });

  describe('getTopic', () => {
    describe('when getTopic is called', () => {
      it('should return an Topic', async () => {
        const result = await client.getService<any>('TopicService').getTopic({
          id: '',
        });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          no: expect.any(Number || null),
        });
      });
    });
  });
});
