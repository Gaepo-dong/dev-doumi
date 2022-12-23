import { useRouter } from 'next/router';
import Head from 'next/head';
import type { GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';

import Header from '@/components/Header';
import Contents from '@/components/CardContents';
import CustomLayout from '@/components/CustomLayout';
import { getItemByTag } from '@/utils/mdx';
import { subTags } from '@/constants';
import { Item, subTagIdentifier, translate } from '@types';

interface SubTagPageProps {
  items: Item[];
}

export default function Tag({}: SubTagPageProps) {
  const router = useRouter();
  const title = router.query.tag?.toString() as subTagIdentifier;

  return (
    <>
      <Head>
        <title>개발 도우미</title>
        <meta name='description' content='개발을 도와주는 도우미' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <CustomLayout header={<Header title={translate[title]} />} contents={<Contents />} />
      </main>
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = Object.keys(translate).map((tag) => ({ params: { tag } }));

  return {
    paths,
    fallback: false,
  };
};

interface GetStaticPropsContext extends ParsedUrlQuery {
  tag: subTagIdentifier;
}

export const getStaticProps: GetStaticProps<{}, GetStaticPropsContext> = async (context) => {
  if (!context.params) {
    throw new Error('params is undefined');
  }

  const { tag } = context.params;
  if (!subTags.includes(tag)) {
    throw new Error(`invalid tag: ${tag}`);
  }

  const items = await getItemByTag(tag);
  return {
    props: {
      items,
    },
  };
};
