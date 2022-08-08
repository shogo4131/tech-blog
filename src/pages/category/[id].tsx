import { useMemo } from 'react';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import clsx from 'clsx';
import { useMedia } from 'use-media';

import { BlogCard } from '@/components/BlogCard';
import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Layout } from '@/components/Layout';
import { client } from '@/lib/client';
import type { Category, Blog, BlogContent } from '@/types/blog';

import styles from '../index.module.css';

type Props = {
  contents: BlogContent[];
  category: string;
};

// TODO: retrun 以下を共通化する
// TODO: URLをidから文字列に変更する
const Category: NextPage<Props> = ({ contents, category }) => {
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
        label: category,
      },
    ],
    [category]
  );

  return (
    <Layout>
      <article>
        <BreadCrumb items={breadCrumbs} />
        <div className={clsx(styles.blogItem, { [styles.xl]: xl, [styles.sm]: sm })}>
          {contents.map(({ id, title, tags, thumbnail, createdAt }) => (
            <BlogCard
              key={id}
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
  const categories = await client.get<Category>({ endpoint: 'category' });
  const paths = categories.contents.map(({ id }) => `/category/${id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const id = ctx.params.id && Array.isArray(ctx.params.id) ? ctx.params.id[0] : ctx.params.id ?? '';

  const blog = await client.get<Blog>({
    endpoint: `blog`,
    queries: { filters: `category[contains]${id}` },
  });

  const category = blog.contents[0].category.filter((category) => category.id === id);

  return {
    props: {
      contents: blog.contents,
      category: category[0].category,
    },
  };
};

export default Category;
