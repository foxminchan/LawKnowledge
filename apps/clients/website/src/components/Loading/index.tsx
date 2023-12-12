import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function Loading() {
  return <Spin indicator={<LoadingOutlined className="!text-2xl" spin />} />;
}
