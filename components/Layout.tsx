import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Sidebar from './Sidebar';

const { Header, Sider, Content, Footer } = Layout;

export default function CustomLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider>
        <Sidebar />
      </Sider>
      <Layout className='site-layout'>
        <Header style={{ textAlign: 'center', background: colorBgContainer }}>Header</Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </Layout>
  );
}
