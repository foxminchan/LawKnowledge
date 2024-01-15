/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Button, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import useMetadata from '@/common/hooks/useMetadata';

type Props = {
  title: string;
};

export default function Search(props: Readonly<Props>) {
  useMetadata(props.title);

  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    if (!value) {
      message.error('Vui lòng nhập từ khóa tìm kiếm');
      return;
    }
    navigate(`/van-ban?keyword=${value}`);
  };

  return (
    <div className="bg-no-repeat bg-search-bg bg-cover bg-center">
      <div className="flex items-center justify-center min-h-[calc(100vh-208px)]">
        <Input.Search
          allowClear
          placeholder="Nhập từ khóa tìm kiếm"
          className="w-2/4 border-none rounded-md bg-japonica-400"
          enterButton={<Button icon={<SearchOutlined />} />}
          onSearch={handleSearch}
          size="large"
        />
      </div>
    </div>
  );
}
