import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { sidebar } from '@/data/sidebar';

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
          return getItem(subItem.present, `${item['main-tag'].identifier}-${subItem.identifier}`);
        }),
      )
    : getItem(item['main-tag'].present, item['main-tag'].identifier);
});

export default function Sidebar() {
  return (
    <Menu
      defaultSelectedKeys={['trending']}
      defaultOpenKeys={sidebar.map((item) => item['main-tag'].identifier)}
      mode='inline'
      theme='light'
      items={items}
    />
  );
}
