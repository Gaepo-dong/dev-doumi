import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/components/Header';
import CustomLayout from '@/components/CustomLayout';

export default function Home() {
  const router = useRouter();
  const title = router.query.id?.toString() as string;

  return (
    <>
      <Head>
        <title>개발 도우미</title>
        <meta name='description' content='개발을 도와주는 도우미' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <CustomLayout header={<Header title={title} />} contents={null} />
      </main>
    </>
  );
}
