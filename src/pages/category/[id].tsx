import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import clsx from 'clsx';

import { BlogCard } from '@/components/BlogCard';
import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { client } from '@/lib/client';
import type { CategoryResponseData, BlogResponseData, Blog } from '@/types/api';

import { page, seoContents } from '../../constants';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from '../index.module.css';

type Props = {
  contents: Blog[];
  category: string;
};

// TODO: retrun 以下を共通化する
const Category: NextPage<Props> = ({ contents, category }) => {
  const { lg, sm } = useMediaQuery();
  const url = `${seoContents.siteUrl}${page.category.url}/${category}`;

  const breadCrumbs: Crumbs[] = [
    {
      id: 1,
      href: page.top.url,
      label: page.top.title,
    },
    {
      id: 2,
      label: category,
    },
  ];

  return (
    <Layout>
      <Seo
        title={`${category} | ${seoContents.blogTitle}`}
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
  const categories = await client.get<CategoryResponseData>({ endpoint: 'category' });
  const paths = categories.contents.map(({ id }) => `/category/${id}`);

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
