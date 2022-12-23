import Head from 'next/head';

import Header from '@/components/Header';
import CustomLayout from '@/components/CustomLayout';
import { getAllItems } from '@/utils/mdx';
import type { Item } from '@/@types';

interface Props {
  items: Item[];
}

export default function Trending({}: Props) {
  return (
    <>
      <Head>
        <title>개발 도우미</title>
        <meta name='description' content='개발을 도와주는 도우미' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <CustomLayout header={<Header title={'트렌딩🚀'} />} contents={null} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const items = await getAllItems();
  if (items instanceof Error) {
    throw new Error('Error while fetching items');
  }

  const sortedItems = items.sort((a, b) => {
    const aDate = new Date(a.data.createAt);
    const bDate = new Date(b.data.createAt);
    return bDate.getTime() - aDate.getTime();
  });

  return {
    props: {
      sortedItems,
    },
  };
};
