import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';

// TODO: Add MDX components here

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
