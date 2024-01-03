/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { ClientGrpcProxy } from '@nestjs/microservices';

describe('HeadingClientGrpcProxy', () => {
  let client: ClientGrpcProxy;

  beforeEach(async () => {
    client = new ClientGrpcProxy({
      protoPath: join(__dirname, '../proto/heading.test.proto'),
      package: 'heading.test',
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        includeDirs: [join(__dirname, '../proto')],
      },
    });
  });

  describe('createHeading', () => {
    describe('when createHeading is called', () => {
      it('should return an Heading', async () => {
        const result = await client
          .getService<any>('HeadingService')
          .createHeading({
            name: 'Xuất nhập cảnh',
            no: 7,
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          no: expect.any(Number || null),
          topic_id: expect.any(String || null),
        });
      });
    });
  });

  describe('updateHeading', () => {
    describe('when updateHeading is called', () => {
      it('should return an Heading', async () => {
        const result = await client
          .getService<any>('HeadingService')
          .updateHeading({
            id: '',
            name: 'Xuất khẩu',
            no: 8,
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          no: expect.any(Number || null),
          topic_id: expect.any(String || null),
        });
      });
    });
  });

  describe('deleteHeading', () => {
    describe('when deleteHeading is called', () => {
      it('should return an Heading', async () => {
        const result = await client
          .getService<any>('HeadingService')
          .deleteHeading({
            id: '',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          no: expect.any(Number || null),
          topic_id: expect.any(String || null),
        });
      });
    });
  });

  describe('getHeadings', () => {
    describe('when getHeadings is called', () => {
      it('should return an array of Heading', async () => {
        const result = await client
          .getService<any>('HeadingService')
          .getHeadings({});
        expect(result).toEqual({
          headings: expect.any(Array),
        });
      });
    });
  });

  describe('getHeading', () => {
    describe('when getHeading is called', () => {
      it('should return an Heading', async () => {
        const result = await client
          .getService<any>('HeadingService')
          .getHeadings({
            page: 1,
            limit: 1,
          });
				expect(result).toEqual({
					headings: expect.any(Array),
        });
      });
    });
  });
});
