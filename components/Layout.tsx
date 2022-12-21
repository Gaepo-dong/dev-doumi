import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Sidebar from './Sidebar';
import CustomFooter from './Footer';

const { Header, Sider, Content, Footer } = Layout;

export default function CustomLayout({
  header,
  contents,
}: {
  header: React.ReactNode;
  contents: React.ReactNode;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider style={{ overflow: 'auto', height: 'calc(100vh - 16px)', background: colorBgContainer }}>
        <Sidebar />
      </Sider>
      <Layout className='site-layout'>
        <Header style={{ display: 'flex', alignItems: 'center', background: colorBgContainer }}>
          {header}
        </Header>
        <Content
          style={{
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {contents}
        </Content>
        <Footer>
          <CustomFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}
