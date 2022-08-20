import { useMemo } from 'react';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import clsx from 'clsx';
import { useMedia } from 'use-media';

import { BlogCard } from '@/components/BlogCard';
import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Layout } from '@/components/Layout';
import { client } from '@/lib/client';
import type { TagResponseData, BlogResponseData, Blog } from '@/types/api';

import styles from '../index.module.css';

type Props = {
  contents: Blog[];
  tag: string;
};

// TODO: retrun 以下を共通化する
const Tags: NextPage<Props> = ({ contents, tag }) => {
  const xl = useMedia({ maxWidth: '1200px' });
  const sm = useMedia({ maxWidth: '540px' });

  const breadCrumbs: Crumbs[] = useMemo(
    () => [
      {
        id: 1,
        href: '/',
        label: 'トップ',
      },
      {
        id: 2,
        label: tag,
      },
    ],
    [tag]
  );

  return (
    <Layout>
      <article>
        <BreadCrumb items={breadCrumbs} className={styles.breadCrumb} />
        <div className={clsx(styles.blogItem, { [styles.xl]: xl, [styles.sm]: sm })}>
          {contents.map(({ id, title, tags, thumbnail, createdAt }) => (
            <BlogCard
              key={id}
              id={id}
              title={title}
              tags={tags}
              thumbnail={thumbnail}
              createdAt={createdAt}
            />
          ))}
        </div>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await client.get<TagResponseData>({ endpoint: 'tags' });
  const paths = tags.contents.map(({ id }) => `/tags/${id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const id = ctx.params.id && Array.isArray(ctx.params.id) ? ctx.params.id[0] : ctx.params.id ?? '';

  const blog = await client.get<BlogResponseData>({
    endpoint: `blog`,
    queries: { filters: `tags[contains]${id}` },
  });

  const tag = blog.contents[0].tags.filter((tag) => tag.id === id);

  return {
    props: {
      contents: blog.contents,
      tag: tag[0].tag,
    },
  };
};

export default Tags;
