import React from 'react';
import { Pagination } from 'antd';

export default function CustomPagination() {
  const [current, setCurrent] = React.useState(1);
  const onPaginate = (page: number, pageSize?: number) => {
    setCurrent(page);
  };

  return <Pagination current={current} onChange={onPaginate} total={100} showSizeChanger={false} />;
}
