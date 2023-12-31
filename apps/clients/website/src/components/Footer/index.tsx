/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Link } from 'react-router-dom';
import { Image, Layout, Typography } from 'antd';
import Coa from '@assets/images/coat_of_arms.svg';
import { fallbackImage } from '@/common/constants/image';

export default function Footer() {
  return (
    <Layout.Footer className="left-0 hidden w-full px-10 mt-auto text-center bg-japonica-700 lg:block">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link to="/" className="inline-block">
            <Image
              src={Coa}
              preview={false}
              decoding="async"
              fallback={fallbackImage}
              alt="Coat of arms"
              loading="lazy"
              className="lg:max-w-[378px] ml-1 lg:h-auto"
            />
          </Link>
        </div>

        <Typography.Text className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
          Tri thức pháp luật là một dự án phi lợi nhuận, được xây dựng và phát
          triển trên nền tảng mã nguồn mở.
        </Typography.Text>

        <div className="flex flex-col justify-center mt-6 sm:flex-row">
          <Typography.Text className="text-sm text-white sm:mr-4 sm:mb-0">
            © {new Date().getFullYear()} Tri thức pháp luật
          </Typography.Text>
        </div>
      </div>
    </Layout.Footer>
  );
}
