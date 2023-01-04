import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { clsx } from 'clsx';
import type { MicroCMSListResponse } from 'microcms-js-sdk';

import { client } from '@/lib/client';
import type { Blog, BlogResponseData } from '@/types/api';
import { range } from '@/utils/range';

import { BlogCard } from '@/components/BlogCard';
import { Layout } from '@/components/Layout';
import { Pagenation } from '@/components/Pagination';
import { Seo } from '@/components/Seo';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { seoContents, pages } from '../../constants';
import styles from '../index.module.css';

const Page: NextPage<MicroCMSListResponse<Blog>> = ({ contents, totalCount }) => {
  const { lg, sm } = useMediaQuery();
  const { blogTitle, description, siteUrl } = seoContents;

  return (
    <Layout>
      <Seo title={blogTitle} description={description} url={siteUrl} />
      <div>
        <article className={clsx(styles.blogItem, { [styles.lg]: lg, [styles.sm]: sm })}>
          {contents.map((content) => (
            <BlogCard key={content.id} content={content} />
          ))}
        </article>
        <Pagenation pageUrl={pages.page.url} totalCount={totalCount} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client.get<BlogResponseData>({ endpoint: 'blog' });

  const paths = range(1, Math.ceil(blogs.totalCount / 9)).map((id) => `/page/${id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const id = ctx.params.id && Array.isArray(ctx.params.id) ? ctx.params.id[0] : ctx.params.id ?? '';
  const offset = (Number(id) - 1) * 9;

  const data = await client.get<BlogResponseData>({
    endpoint: `blog`,
    queries: { offset, limit: 9 },
  });

  return {
    props: {
      contents: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default Page;
