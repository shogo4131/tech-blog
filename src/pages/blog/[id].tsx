import { useMemo } from 'react';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Chip } from '@/components/Chip';
import { Layout } from '@/components/Layout';
import { client } from '@/lib/client';
import { Blog, BlogResponseData, BlogDetailResponseData } from '@/types/api';

import { page } from '../../constants/page';

import styles from './[id].module.css';

const BlogDetail: NextPage<Blog> = ({
  id,
  title,
  //   body,
  thumbnail,
  tags,
  category,
  createdAt,
  //   description,
}) => {
  const breadCrumbs: Crumbs[] = useMemo(
    () => [
      {
        id: 1,
        href: page.top.url,
        label: 'トップ',
      },
      {
        id: 2,
        href: `${page.category.url}/${id}`,
        label: category.toString(),
      },
      {
        id: 3,
        label: title,
      },
    ],
    [category, id, title]
  );

  return (
    <Layout>
      <div>
        <BreadCrumb items={breadCrumbs} />
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.datetime}>
            <img src="/images/clock.svg" alt="日付" height={16} width={16} />
            <time dateTime={createdAt}>{createdAt.slice(0, 10)}</time>
          </span>
          <Chip tags={tags} />
          <img
            src={thumbnail.url}
            alt="サムネイル"
            height={600}
            width={1200}
            className={styles.thumbnail}
          />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blog = await client.get<BlogResponseData>({ endpoint: 'blog' });
  const paths = blog.contents.map(({ id }) => `/blog/${id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const id = ctx.params.id && Array.isArray(ctx.params.id) ? ctx.params.id[0] : ctx.params.id ?? '';

  const { contents } = await client.get<BlogDetailResponseData>({
    endpoint: 'blog',
    queries: { ids: id },
  });

  return {
    props: {
      id: contents[0].id,
      title: contents[0].title,
      body: contents[0].body,
      createdAt: contents[0].createdAt,
      tags: contents[0].tags,
      thumbnail: contents[0].thumbnail,
      category: contents[0].category[0].category,
      description: contents[0].description,
    },
  };
};

export default BlogDetail;
