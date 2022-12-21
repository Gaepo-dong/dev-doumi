import Head from 'next/head';
import type { GetStaticProps } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import Header from '@/components/Header';
import CustomLayout from '@/components/CustomLayout';
import { getPostsByTag } from '@/utils/mdx';
import type { FrontMatter } from '@/@types';

interface PageProps {
  data: FrontMatter;
  mdxSource: MDXRemoteSerializeResult;
}

export default function Home({}: PageProps) {
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPostsByTag('Browser');

  return {
    props: {
      ...data,
    },
  };
};
