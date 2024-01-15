/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { useRef } from 'react';
import { useAtom } from 'jotai';
import { Breadcrumb } from 'antd';
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
      align: 'center',
    },
    {
      dataIndex: 'topic',
      title: 'Chủ đề',
      width: 200,
      align: 'center',
    },
    {
      dataIndex: 'heading',
      title: 'Đề mục',
      width: 200,
      align: 'center',
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
          labelWidth: 'auto',
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
          emptyText: 'Hiện chưa có dữ liệu',
        }}
      />
    </>
  );
}
