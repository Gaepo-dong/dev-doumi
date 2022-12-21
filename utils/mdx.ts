import { readFileSync } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

export const getPost = async () => {
  const post = readFileSync('');

  const { data, content } = matter(post);
  const {} = await serialize(content);
};
