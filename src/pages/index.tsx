import type { GetStaticProps, NextPage } from 'next';

import { clsx } from 'clsx';
import type { MicroCMSListResponse } from 'microcms-js-sdk';

import { client } from '@/lib/client';
import type { Blog, BlogResponseData } from '@/types/api';

import { BlogCard } from '@/components/BlogCard';
import { Layout } from '@/components/Layout';
import { Pagenation } from '@/components/Pagination';
import { Seo } from '@/components/Seo';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { seoContents, pages } from '../constants';

import styles from './index.module.css';

const PER_PAGE = 9;

// TODO: return以降を共通化
const Home: NextPage<MicroCMSListResponse<Blog>> = ({ contents, totalCount }) => {
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
        {totalCount > PER_PAGE && <Pagenation pageUrl={pages.page.url} totalCount={totalCount} />}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blog = await client.get<BlogResponseData>({ endpoint: 'blog', queries: { limit: 9 } });

  return {
    props: {
      contents: blog.contents,
      totalCount: blog.totalCount,
    },
  };
};

export default Home;
