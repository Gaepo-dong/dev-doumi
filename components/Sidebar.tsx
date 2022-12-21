import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { sidebar } from '@/data/sidebar';
import { MenuInfo } from 'rc-menu/lib/interface';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const items: MenuItem[] = sidebar.map((item) => {
  return item['sub-tags']
    ? getItem(
        item['main-tag'].present,
        item['main-tag'].identifier,
        null,
        item['sub-tags'].map((subItem) => {
          return getItem(subItem.present, `${subItem.identifier}`);
        }),
      )
    : getItem(item['main-tag'].present, item['main-tag'].identifier);
});

export default function Sidebar() {
  const router = useRouter();
  const routerQuery = router.query.tag?.toString();

  const onMenu = (e: MenuInfo) => {
    router.push(`/category/${e.key.toString()}`);
  };

  // root
  if (router.asPath === '/') {
    return (
      <Menu
        defaultSelectedKeys={['trending']}
        defaultOpenKeys={sidebar.map((item) => item['main-tag'].identifier)}
        onClick={(e) => onMenu(e)}
        mode='inline'
        theme='light'
        items={items}
      />
    );
  }
  // loading
  if (!routerQuery) return null;
  return (
    <Menu
      defaultSelectedKeys={[routerQuery]}
      defaultOpenKeys={sidebar.map((item) => item['main-tag'].identifier)}
      onClick={(e) => onMenu(e)}
      mode='inline'
      theme='light'
      items={items}
    />
  );
}
