import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { media } from '@/styles';
import { Card } from 'antd';

const { Meta } = Card;

export default function CustomCard() {
  const router = useRouter();

  const onContent = () => {
    router.push(`/content/1`);
  };

  return (
    <CardContainer>
      <Card
        style={{ minWidth: '100%' }}
        cover={
          <img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
        }
        hoverable
        onClick={onContent}
      >
        <Meta title='Card title' description='This is the description' />
      </Card>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 300px;
  ${media.tablet} {
    width: 100%;
  }
`;
