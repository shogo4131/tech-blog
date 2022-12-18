import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { clsx } from 'clsx';

import { client } from '@/lib/client';
import type { TagResponseData, BlogResponseData, Blog } from '@/types/api';

import { BlogCard } from '@/components/BlogCard';
import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { pages, seoContents } from '../../constants';
import styles from '../index.module.css';

type Props = {
  contents: Blog[];
  tag: string;
};

// TODO: retrun 以下を共通化する
const Tags: NextPage<Props> = ({ contents, tag }) => {
  const { lg, sm } = useMediaQuery();
  const url = `${seoContents.siteUrl}${pages.tags.url}/${tag}`;

  const breadCrumbs: Crumbs[] = [
    {
      id: 1,
      href: pages.top.url,
      label: pages.top.title,
    },
    {
      id: 2,
      label: tag,
    },
  ];

  return (
    <Layout>
      <Seo
        title={`${tag} | ${seoContents.blogTitle}`}
        description={seoContents.description}
        url={url}
      />
      <article>
        <BreadCrumb items={breadCrumbs} className={styles.breadCrumb} />
        <div className={clsx(styles.blogItem, { [styles.lg]: lg, [styles.sm]: sm })}>
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
