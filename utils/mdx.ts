import { readFileSync } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import glob from 'glob';

import type { subTagIdentifier } from '@/@types';

const DIR_STRING = 'data/items';

const POSTS_PATH = path.join(process.cwd(), DIR_STRING);

export const getPostsByTag = async (tag: subTagIdentifier) => {
  const { data, content } = matter('');
  const mdxSource = await serialize(content);

  return {
    data,
    mdxSource,
  };
};
