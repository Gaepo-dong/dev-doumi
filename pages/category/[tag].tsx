import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/components/Header';
import Contents from '@/components/CardContents';
import CustomLayout from '@/components/CustomLayout';
import { subTagIdentifier, translate } from '@types';

export default function Home() {
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
