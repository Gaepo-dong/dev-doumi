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

const items: MenuItem[] = sidebar.map((item, index) => {
  return getItem(
    item['main-tag'].present,
    index + 1,
    null,
    item['sub-tags'].map((subItem, subIndex) => {
      return getItem(subItem.present, `${index + 1}-${subIndex + 1}`);
    }),
  );
});

export default function Sidebar() {
  return (
    <Menu defaultSelectedKeys={['1-1']} defaultOpenKeys={['1']} mode='inline' theme='dark' items={items} />
  );
}
