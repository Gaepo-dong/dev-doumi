import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';

import Header from '@/components/Header';
import CustomLayout from '@/components/CustomLayout';
import Content from '@/components/Content';
import { getItem, getItemPaths } from '@/utils/mdx';
import { Item, subTagIdentifier } from '@/@types';

interface DetailPageProps {
  item: Item;
}

export default function Home({ item }: DetailPageProps) {
  const { data, mdxSource } = item;
  const { title } = data;

  return (
    <>
      <Head>
        <title>개발 도우미</title>
        <meta name='description' content='개발을 도와주는 도우미' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <CustomLayout header={<Header title={title} />} contents={<Content />} />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getItemPaths();

  if (paths instanceof Error) {
    throw new Error('Error while fetching paths');
  }

  return {
    paths,
    fallback: false,
  };
};

interface GetStaticPropsContext extends ParsedUrlQuery {
  slug: [subTagIdentifier, string];
}

export const getStaticProps: GetStaticProps<DetailPageProps, GetStaticPropsContext> = async (context) => {
  if (!context.params?.slug) {
    throw new Error('Slug is not defined');
  }

  const [_, title] = context.params.slug;
  const item = await getItem(title);

  if (!item || item instanceof Error) {
    throw new Error('Item is not defined');
  }

  return { props: { item } };
};
