import Head from 'next/head';
import Header from '@/components/Header';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>개발 도우미</title>
        <meta name='description' content='개발을 도와주는 도우미' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Layout header={<Header title={'트렌딩🚀'} />} contents={null} />
      </main>
    </>
  );
}
