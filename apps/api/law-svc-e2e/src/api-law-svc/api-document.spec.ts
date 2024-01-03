/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { ClientGrpcProxy } from '@nestjs/microservices';

describe('DocumentClientGrpcProxy', () => {
  let client: ClientGrpcProxy;

  beforeEach(async () => {
    client = new ClientGrpcProxy({
      protoPath: join(__dirname, '../proto/document.test.proto'),
      package: 'document.test',
      loader: {
        enums: String,
        objects: true,
        arrays: true,
        includeDirs: [join(__dirname, '../proto')],
      },
    });
  });

  describe('createDocument', () => {
    describe('when createDocument is called', () => {
      it('should return an Document', async () => {
        const result = await client
          .getService<any>('DocumentService')
          .createDocument({
            name: 'Điều 1: Luật hành chính',
            content: `
							1. Vi phạm hành chính là hành vi có lỗi do cá nhân, tổ chức thực hiện, vi phạm quy định của pháp luật về quản lý nhà nước mà không phải là tội phạm và theo quy định của pháp luật phải bị xử phạt vi phạm hành chính.

							2. Xử phạt vi phạm hành chính là việc người có thẩm quyền xử phạt áp dụng hình thức xử phạt, biện pháp khắc phục hậu quả đối với cá nhân, tổ chức thực hiện hành vi vi phạm hành chính theo quy định của pháp luật về xử phạt vi phạm hành chính.

							3. Biện pháp xử lý hành chính là biện pháp được áp dụng đối với cá nhân vi phạm pháp luật về an ninh, trật tự, an toàn xã hội mà không phải là tội phạm, bao gồm biện pháp giáo dục tại xã, phường, thị trấn; đưa vào trường giáo dưỡng; đưa vào cơ sở giáo dục bắt buộc và đưa vào cơ sở cai nghiện bắt buộc.`,
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          codification_id: expect.any(String || null),
          heading_id: expect.any(String || null),
        });
      });
    });
  });

  describe('updateDocument', () => {
    describe('when updateDocument is called', () => {
      it('should return an Document', async () => {
        const result = await client
          .getService<any>('DocumentService')
          .updateDocument({
            id: '',
            name: 'Điều 1: Luật hành chính dân sự',
            content: `
							4. Biện pháp thay thế xử lý vi phạm hành chính là biện pháp mang tính giáo dục được áp dụng để thay thế cho hình thức xử phạt vi phạm hành chính hoặc biện pháp xử lý hành chính đối với người chưa thành niên vi phạm hành chính, bao gồm biện pháp nhắc nhở và biện pháp quản lý tại gia đình.

							5. Tái phạm là việc cá nhân, tổ chức đã bị xử lý vi phạm hành chính nhưng chưa hết thời hạn được coi là chưa bị xử lý vi phạm hành chính, kể từ ngày chấp hành xong quyết định xử phạt, quyết định áp dụng biện pháp xử lý hành chính hoặc kể từ ngày hết thời hiệu thi hành quyết định này mà lại thực hiện hành vi vi phạm hành chính đã bị xử lý.

							6. Vi phạm hành chính nhiều lần là trường hợp cá nhân, tổ chức thực hiện hành vi vi phạm hành chính mà trước đó đã thực hiện hành vi vi phạm hành chính này nhưng chưa bị xử lý và chưa hết thời hiệu xử lý.`,
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          codification_id: expect.any(String || null),
          heading_id: expect.any(String || null),
        });
      });
    });
  });

  describe('deleteDocument', () => {
    describe('when deleteDocument is called', () => {
      it('should return an Document', async () => {
        const result = await client
          .getService<any>('DocumentService')
          .deleteDocument({
            id: '',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          codification_id: expect.any(String || null),
          heading_id: expect.any(String || null),
        });
      });
    });
  });

  describe('getDocument', () => {
    describe('when getDocument is called', () => {
      it('should return an Document', async () => {
        const result = await client
          .getService<any>('DocumentService')
          .getDocument({
            id: '',
          });
        expect(result).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          codification_id: expect.any(String || null),
          heading_id: expect.any(String || null),
        });
      });
    });
  });

  describe('getDocuments', () => {
    describe('when getDocuments is called', () => {
      it('should return an array of Document', async () => {
        const result = await client
          .getService<any>('DocumentService')
          .getDocuments({
            pagination: {
              page: 1,
              limit: 10,
            },
          });
        expect(result).toEqual({
          documents: expect.any(Array),
        });
      });
    });
  });

  describe('SummarizeDocument', () => {
    describe('when summarizeDocument is called', () => {
      it('should return a summarized Document', async () => {
        const result = await client
          .getService<any>('DocumentService')
          .summarizeDocument({
            context: `
							4. Biện pháp thay thế xử lý vi phạm hành chính là biện pháp mang tính giáo dục được áp dụng để thay thế cho hình thức xử phạt vi phạm hành chính hoặc biện pháp xử lý hành chính đối với người chưa thành niên vi phạm hành chính, bao gồm biện pháp nhắc nhở và biện pháp quản lý tại gia đình.

							5. Tái phạm là việc cá nhân, tổ chức đã bị xử lý vi phạm hành chính nhưng chưa hết thời hạn được coi là chưa bị xử lý vi phạm hành chính, kể từ ngày chấp hành xong quyết định xử phạt, quyết định áp dụng biện pháp xử lý hành chính hoặc kể từ ngày hết thời hiệu thi hành quyết định này mà lại thực hiện hành vi vi phạm hành chính đã bị xử lý.

							6. Vi phạm hành chính nhiều lần là trường hợp cá nhân, tổ chức thực hiện hành vi vi phạm hành chính mà trước đó đã thực hiện hành vi vi phạm hành chính này nhưng chưa bị xử lý và chưa hết thời hiệu xử lý.`,
          });
        expect(result).toEqual(expect.any(String));
      });
    });
  });
});
