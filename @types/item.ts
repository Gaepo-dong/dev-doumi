import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { subTagIdentifier } from './tag';

export interface FrontMatter {
  title: string;
  description: string;
  thumbnail: string;
  subTag: subTagIdentifier;
  createAt: Date;
  author: string;
}

export interface Item {
  data: FrontMatter;
  mdxSource: MDXRemoteSerializeResult;
}
