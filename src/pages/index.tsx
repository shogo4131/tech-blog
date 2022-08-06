import type { GetStaticProps, NextPage } from 'next';

import clsx from 'clsx';
import type { MicroCMSListResponse } from 'microcms-js-sdk';
import { useMedia } from 'use-media';

import { BlogCard } from 'components/BlogCard';
import { Layout } from 'components/Layout';
import { client } from 'lib/client';

import type { Blog, BlogContent } from '../types/blog';

import styles from './index.module.css';

// TODO: 画面サイズをconstantディレクトリに定義する
const Home: NextPage<MicroCMSListResponse<BlogContent>> = ({ contents }) => {
  const xl = useMedia({ maxWidth: '1200px' });
  const sm = useMedia({ maxWidth: '540px' });

  return (
    <Layout>
      <article className={clsx(styles.blogItem, { [styles.xl]: xl, [styles.sm]: sm })}>
        {contents.map(({ id, title, tags, thumbnail, createdAt }) => (
          <BlogCard
            key={id}
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
  const blog = await client.get<Blog>({ endpoint: 'blog' });

  return {
    props: {
      contents: blog.contents,
    },
  };
};

export default Home;
