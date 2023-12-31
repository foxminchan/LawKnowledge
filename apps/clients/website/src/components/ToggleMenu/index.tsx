/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import clsx from 'clsx';
import { Button } from 'antd';
import Cookies from 'js-cookie';
import { Suspense } from 'react';
import loadable from '@loadable/component';
import { navItems } from '@/mocks/navItem.mock';
import { CloseOutlined } from '@ant-design/icons';
import { StorageKeys } from '@/common/constants/keys';
import { PageLoading } from '@ant-design/pro-components';
import { accountItems, authItems } from '@/mocks/authItem.mock';

const ToggleItem = loadable(() => import('@components/ToggleItem'));

type Props = {
  menuVisible: boolean;
  onClose: () => void;
};

export default function ToggleMenu(props: Readonly<Props>) {
  const userItems = Cookies.get(StorageKeys.ACCESS_TOKEN)
    ? accountItems
    : authItems;

  return (
    <div
      className={clsx(
        'fixed top-0 right-0 w-full h-screen bg-white-smoke-100 lg:hidden transition-transform duration-500 block z-50',
        props.menuVisible ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <div className="relative w-full h-full">
        <Button
          onClick={props.onClose}
          className="absolute top-0 right-0 text-lg border-none bg-transparent z-0"
          icon={<CloseOutlined className="text-japonica-500" />}
        />
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Suspense fallback={<PageLoading />}>
            {[...navItems, ...userItems].map((item) => (
              <ToggleItem
                key={item.id}
                id={item.id}
                name={item.name}
                link={item.link}
                onClick={props.onClose}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
