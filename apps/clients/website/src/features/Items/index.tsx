/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { useRef } from 'react';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';
import { Breadcrumb, Button } from 'antd';
import useMetadata from '@/common/hooks/useMetadata';
import { ItemResponse } from './types/law-search.type';
import { lawSearchAtom } from './atoms/law-search.atom';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';

type Props = {
  title: string;
};

export default function Items(props: Readonly<Props>) {
  useMetadata(props.title);

  const [{ isError, data }] = useAtom(lawSearchAtom);

  const columns: ProColumns<ItemResponse>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      dataIndex: 'name',
      title: 'Văn bản',
      width: 400,
      render: (text, record) => (
        <Link to={`/van-ban/${record.id}`} target="_blank" rel="noreferrer">
          {text}
        </Link>
      ),
      align: 'center',
      fieldProps: {
        placeholder: 'Nhập tên văn bản',
      },
    },
    {
      dataIndex: 'topic',
      title: 'Chủ đề',
      width: 200,
      align: 'center',
      fieldProps: {
        placeholder: 'Nhập chủ đề',
      },
    },
    {
      dataIndex: 'heading',
      title: 'Đề mục',
      width: 200,
      align: 'center',
      fieldProps: {
        placeholder: 'Nhập đề mục',
      },
    },
  ];

  const actionRef = useRef<ActionType>();

  return (
    <>
      <Breadcrumb className="py-5 px-5">
        <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Danh sách văn bản</Breadcrumb.Item>
      </Breadcrumb>
      <ProTable<ItemResponse>
        headerTitle="Danh sách văn bản"
        options={{
          reloadIcon: true,
          densityIcon: true,
          fullScreen: true,
          reload: true,
          setting: false,
        }}
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async () => {
          return {
            data: data,
            success: !isError,
          };
        }}
        editable={{
          type: 'multiple',
        }}
        rowKey="id"
        search={{
          layout: 'vertical',
          defaultCollapsed: false,
          resetText: 'Tải lại',
          searchText: 'Tìm kiếm',
          optionRender: ({ searchText, resetText }, { form }) => [
            <Button
              key="search"
              className="bg-japonica-400 !text-white hover:!bg-japonica-600 border-none"
              onClick={() => {
                form?.submit();
              }}
            >
              {searchText}
            </Button>,
            <Button
              key="reset"
              className="hover:!text-japonica-400 hover:!bg-white hover:!border-japonica-400"
              onClick={() => {
                form?.resetFields();
              }}
            >
              {resetText}
            </Button>,
          ],
        }}
        form={{
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        scroll={{
          x: 1300,
          y: 500,
        }}
        pagination={{
          current: 1,
          pageSize: 20,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} trên ${total} văn bản`,
        }}
        locale={{
          emptyText: <div className="text-center">Không có dữ liệu</div>,
        }}
      />
    </>
  );
}
