import React from 'react';
import { useRouter } from 'next/router';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { sidebar } from '@/data/sidebar';
import { translate } from '@types';

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
        translate[item['main-tag']],
        item['main-tag'],
        null,
        item['sub-tags'].map((subItem) => {
          return getItem(translate[subItem], `${subItem}`);
        }),
      )
    : getItem(translate[item['main-tag']], item['main-tag']);
});

export default function Sidebar() {
  const router = useRouter();
  const routerQuery = router.query.tag?.toString();

  const onMenu = (e: MenuInfo) => {
    router.push(`/category/${e.key.toString()}`);
  };

  console.log(router);

  // root
  if (router.asPath === '/') {
    return (
      <Menu
        defaultSelectedKeys={['trending']}
        defaultOpenKeys={sidebar.map((item) => item['main-tag'])}
        onClick={(e) => onMenu(e)}
        mode='inline'
        theme='light'
        items={items}
      />
    );
  }

  // loading
  if (!routerQuery) return null;

  // done loading
  return (
    <Menu
      defaultSelectedKeys={[routerQuery]}
      defaultOpenKeys={sidebar.map((item) => item['main-tag'])}
      onClick={(e) => onMenu(e)}
      mode='inline'
      theme='light'
      items={items}
    />
  );
}
