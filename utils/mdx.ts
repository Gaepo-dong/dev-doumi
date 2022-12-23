import { readFileSync } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import matter from 'gray-matter';
import glob from 'glob';

import { subTags } from '@/constants';
import type { FrontMatter, Item, subTagIdentifier } from '@/@types';

const ITEM_DIR = 'data/items';
const ITEM_PATH = path.join(process.cwd(), ITEM_DIR);

/**
 * 아이템의 데이터가 유효한지 검사합니다.
 * @param {any} data
 * @throws {Error} title이 없을 경우
 * @throws {Error} subTag가 없을 경우
 * @throws {Error} subTag가 유효하지 않을 경우
 * @throws {Error} createAt이 없을 경우
 * @example
 * ```ts
 * const data = {
 * title: 'raycast',
 * subTag: 'application',
 * createAt: '2021-08-01',
 * };
 * validateItemData(data);
 * ```
 * @returns {void}
 */
const validateItemData = (data: any) => {
  const { title, subTag, createAt } = data;

  if (!title) {
    throw new Error('title is required');
  } else if (!subTag) {
    throw new Error('subTag is required');
  } else if (!subTags.includes(subTag)) {
    throw new Error('subTag is not valid.', {
      cause: {
        subTag,
        title,
      },
    });
  } else if (!createAt) {
    throw new Error('createAt is required');
  }
};

/**
 * title에 해당하는 아이템을 반환합니다.
 * @async
 * @param {string} title
 * @description
 * - `readFileSync`를 사용하여 `data/items` 디렉토리 내의 title 에 해당하는 파일을 가져옵니다.
 * - 가져온 파일을 `matter`를 사용하여 `FrontMatter`와 `content`로 분리합니다.
 * - `serialize`를 사용하여 `mdxSource`를 생성합니다.
 * - `data`, `mdxSource`를 반환합니다.
 * @example
 * ```ts
 * const item = getItem('raycast');
 * item === {
 * data: FrontMatter,
 * mdxSource: MDXRemoteSerializeResult,
 * }
 * ```
 * @returns {Promise<Item | Error>} item or Error
 */
export const getItem = async (title: string) => {
  let item;

  try {
    const source = readFileSync(`${ITEM_PATH}/${title}.mdx`);
    const { data, content } = matter(source);

    validateItemData(data);

    const mdxSource = await serialize(content);

    item = {
      data: data as FrontMatter,
      mdxSource,
    };
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }

  return item;
};

/**
 * subTag에 해당하는 모든 아이템을 반환합니다.
 * @async
 * @param {subTagIdentifier} subTag
 * @see {@link getAllItems}
 * @example
 * ```ts
 * const items = getItemByTag('application');
 * items === [
 * {
 * data: FrontMatter,
 * fileName: 'raycast',
 * mdxSource: MDXRemoteSerializeResult,
 * },...]
 * ```
 * @returns {Promise<({ fileName: string } & Item)[]>} items
 */
export const getItemByTag = async (subTag: subTagIdentifier) => {
  let items: ({ fileName: string } & Item)[] = [];

  try {
    const allItems = await getAllItems();
    items = allItems.filter((item) => item.data.subTag === subTag);
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
  return items;
};

type GetAllItemsFunction = () => Promise<({ fileName: string } & Item)[]>;
/**
 * `data/items` 디렉토리 내의 모든 아이템을 반환합니다.
 * @async
 * @description
 * - `glob`을 사용하여 `data/items` 디렉토리 내의 모든 파일을 가져옵니다.
 * - 가져온 파일을 `matter`를 사용하여 `FrontMatter`와 `content`로 분리합니다.
 * - `serialize`를 사용하여 `mdxSource`를 생성합니다.
 * - `data`, `fileName`, `mdxSource`를 반환합니다.
 * @example
 * ```ts
 * const items = getAllItems();
 * items === [
 * {
 *  data: FrontMatter,
 *  fileName: 'raycast',
 *  mdxSource: MDXRemoteSerializeResult,
 * },...]
 * ```
 * @returns {Promise<({ fileName: string } & Item)[]>} items
 */
export const getAllItems: GetAllItemsFunction = async (): Promise<({ fileName: string } & Item)[]> => {
  const files = glob.sync(`${ITEM_PATH}/*.mdx`);

  const items = await Promise.all(
    files.map(async (file) => {
      const source = readFileSync(file);
      const fileName = path.basename(file, '.mdx');
      const { data, content } = matter(source);

      validateItemData(data);

      const mdxSource = await serialize(content);

      return { data: data as FrontMatter, fileName, mdxSource };
    }),
  );
  return items;
};

/**
 * 정적 생성을 위한 경로를 반환합니다.
 *
 * @description
 * - `glob`을 사용하여 `data/items` 디렉토리 내의 모든 파일을 가져옵니다.
 * - 가져온 파일의 실제 위치 및 파일명, subTag 기반으로 경로를 생성합니다.
 * @example
 * ```ts
 * const paths = getItemPaths();
 * paths === [
 * '/category/application/raycast',
 * '/category/application/pomoTimer',
 * ]
 * ```
 * @returns {string[]} paths
 */
export const getItemPaths = async () => {
  let paths: string[] = [];
  try {
    const files = glob.sync(`${ITEM_PATH}/*.mdx`);

    const items = await Promise.all(
      files.map(async (file) => {
        const source = readFileSync(file);
        const fileName = path.basename(file, '.mdx');
        const { data } = matter(source);

        validateItemData(data);

        return { data, fileName } as { data: FrontMatter; fileName: string };
      }),
    );

    paths = items.map(({ data, fileName }) => `/category/${data.subTag}/${fileName}`);
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
  return paths;
};
