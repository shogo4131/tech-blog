import type { GetStaticProps, NextPage } from 'next';

import clsx from 'clsx';
import type { MicroCMSListResponse } from 'microcms-js-sdk';

import { BlogCard } from '@/components/BlogCard';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { client } from '@/lib/client';
import type { Blog, BlogResponseData } from '@/types/api';

import { seoContents } from '../constants';
import { useMediaQuery } from '../hooks/useMediaQuery';

import styles from './index.module.css';

// TODO: return以降を共通化
const Home: NextPage<MicroCMSListResponse<Blog>> = ({ contents }) => {
  const { lg, sm } = useMediaQuery();
  const { blogTitle, description, siteUrl } = seoContents;

  return (
    <Layout>
      <Seo title={blogTitle} description={description} url={siteUrl} />
      <article className={clsx(styles.blogItem, { [styles.lg]: lg, [styles.sm]: sm })}>
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
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blog = await client.get<BlogResponseData>({ endpoint: 'blog' });

  return {
    props: {
      contents: blog.contents,
    },
  };
};

export default Home;
